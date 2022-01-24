<?php

namespace App\Controller\Website;

use App\Entity\Message;
use App\Entity\Report;
use App\Entity\Url;
use App\Form\MessageType;
use App\Repository\MessageRepository;
use App\Repository\ReportRepository;
use App\Repository\UrlRepository;
use App\Service\ReportManager;
use App\Service\StripePayment;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Intl\Locales;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\NormalizableInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * @Route("/message", name="message_")
 */
class HomeController extends AbstractController
{
    /**
     * @var TranslatorInterface
     */
    private $translator;

    /**
     * @var StripePayment
     */
    private $stripePayment;
    /**
     * @var string
     */
    private $publicKey;
    /**
     * @var MessageRepository
     */
    private $messageRepository;
    /**
     * @var ReportManager
     */
    private $reportManager;

    public function __construct(
        TranslatorInterface $translator,
        StripePayment $stripePayment,
        MessageRepository $messageRepository,
        string $publicKey,
        ReportManager $reportManager
    ){
        $this->translator = $translator;
        $this->stripePayment = $stripePayment;
        $this->publicKey = $publicKey;
        $this->messageRepository = $messageRepository;
        $this->reportManager = $reportManager;
    }

    /**
     * @Route({"fr": "/{key}", "en": "/en/{key}", "es": "/es/{key}", "it": "/it/{key}"}, name="index")
     * @Entity("url", expr="repository.findByKey(key)")
     */
    public function index(Request $request, Url $url): Response
    {
//        if ($request->getLocale() !== substr($request->server->get('HTTP_ACCEPT_LANGUAGE'), 0, 2)) {
//            $locale = substr($request->server->get('HTTP_ACCEPT_LANGUAGE'), 0, 2);
//            return $this->redirectToRoute($request->get('_route'), [
//                '_locale' => $locale,
//                'key' => $url->getUrlToRoute()
//            ]);
//        }

        $etape = 0;
        if ($request->getSession()->get('step', 0)) {
            $etape = $request->getSession()->get('step');
        }

        $etape = (int) $url->lastStep() ?: $etape;
        // A supprimé 👇
//        $etape = 1;
//        $request->getSession()->set('step', $etape);
//
        if ($etape === 2 && $url->getTimer() && $url->getTimer() >= (new \DateTime())) {
            return $this->render('home/attents.html.twig', ['timer' => $url->getTimer()->format('c')]);
        }

        switch ($etape) {
            case 0:
                return $this->step0($request, $url);
            case 1:
                return $this->step1($request, $url);
            case 2:
                return $this->step2($request, $url);
            case 3:
                return $this->step3($request, $url);
        }
    }

    private function step0(Request $request, Url $url): Response
    {
        if ($this->getUser()) {
            $url->setUserVisited($this->getUser()->getId());
            $this->getDoctrine()->getManager()->flush();
        }

        $form = $this->createFormBuilder()
            ->add('language', ChoiceType::class, [
                'choices' => [
                    ucwords(Locales::getName('fr', $request->getLocale())) => 'fr',
                    ucwords(Locales::getName('en', $request->getLocale())) => 'en',
                    ucwords(Locales::getName('it', $request->getLocale())) => 'it',
                ],
                'label' => ' '
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted()){
            $data = $form->getData();

            $locale = $request->getLocale();
            if ($data['language'] ?? false) {
                $locale = $data['language'];
            }

            $request->getSession()->set('step', 1);

            return $this->redirectToRoute($request->get('_route'), ['key' => $url->getUrlToRoute(), '_locale' => $locale]);
        }

        return $this->render('home/step0.html.twig', ['form' => $form->createView()]);
    }

    private function step1(Request $request, Url $url): Response
    {

        if ($this->getUser()) {
            $url->setUserVisited($this->getUser()->getId());
            $this->getDoctrine()->getManager()->flush();
        }

        $message = $url->lastMessage();
        if (!$message) {
            $message = new Message();
        }

        if (
            $request->get('id')
            && $this->messageRepository->find($request->get('id'))
            && !$request->isMethod('post')
        ) {
            $messagePrereglage = $this->messageRepository->find($request->get('id'));

            $message = clone $messagePrereglage;
            $message->setId(null);
            $message->setPrereglage(false);
        }

        $form = $this->createForm(MessageType::class, $message);

        $form->handleRequest($request);


        // On stock le message dans le brouillon et on reste dans le state 1
        if ($form->isSubmitted() && $form->isValid() && $request->get('draft')) {
            $message->setUrl($url);
            $message->setLanguage($request->getLocale());

            $em = $this->getDoctrine()->getManager();
            $message->setStep(1);
            $em->persist($message);
            $em->flush();

            $this->addFlash('success', 'Vos informations on été enregister en brouillon !');

            return $this->redirectToRoute($request->get('_route'), ['key' => $url->getUrlToRoute(), '_locale' => $request->getLocale()]);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $message->setIp($request->getClientIp());

            if ($this->getUser()) {
                // Propritaire du meetcoin
                $message->setUser($this->getUser());
            }
//            if (!$form->get('type')->getData()) {
//                $formError = new FormError($this->translator->trans('homepage.error.type'));
//                $form->get('type')->addError($formError);
//                return $this->render('home/index.html.twig', [
//                    'form' => $form->createView(),
//                    'url'  => $url
//                ]);
//            }

            // check if il ya un username qui est renseigné
            if (
                !$message->getSnap()
                && !$message->getMessenger()
                && !$message->getEmail()
                && !$message->getInsta()
                && !trim($message->getMessage())
            ) {
                $formError = new FormError($this->translator->trans('homepage.error.contact'));
                $form->get('email')->addError($formError);
                return $this->render('home/index.html.twig', [
                    'form' => $form->createView(),
                    'url'  => $url
                ]);
            }
            if ($this->reportManager->checkIsBanned($message)) {
                $formError = new FormError($this->translator->trans('homepage.report.message.error'));
                $form->get('email')->addError($formError);
                return $this->render('home/index.html.twig', [
                    'form' => $form->createView(),
                    'url'  => $url
                ]);
            }
            // On créé le message et on passe dans le state 2
            if ($timer = $message->getTimeToShowMessage()) {
                $url->setTimer(new \DateTime($timer));
            } else {
                $url->setTimer(new \DateTime());
            }
            $message->setUrl($url);
            $message->setLanguage($request->getLocale());

            $em = $this->getDoctrine()->getManager();
            $message->setStep(2);

            $em->persist($message);
            $em->flush();

            return $this->redirectToRoute($request->get('_route'), ['key' => $url->getUrlToRoute(), '_locale' => $request->getLocale()]);
        }

        $prereglages = [];
        if ($this->getUser()) {
            $prereglages = $this->messageRepository->findBy(['user' => $this->getUser(), 'isPrereglage' => true]);
        }

        return $this->render('home/index.html.twig', [
            'form' => $form->createView(),
            'url'  => $url,
            'prereglages' => $prereglages,
            'url_to_redirect' => $this->generateUrl($request->get('_route'), ['key' => $url->getUrlToRoute(), '_locale' => $request->getLocale()], UrlGeneratorInterface::ABSOLUTE_URL),
        ]);
    }

    private function step2(Request $request, Url $url): Response
    {
        if ($this->getUser()) {
            $url->setUserVisited($this->getUser()->getId());
            $this->getDoctrine()->getManager()->flush();
        }

        $form = $this->createFormBuilder()
            ->add('suivante', HiddenType::class, [
                'required' => false
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
           // updater le step du message
            $message = $url->lastMessage();
            if ($url->isFree()) {
                return new RedirectResponse($this->generateUrl('message_reset', [
                    'key' => $url->getUrlToRoute(),
                    '_locale' => $request->getLocale()
                ]));
            }
            if ($this->getUser() && ($this->getUser()->getCredit() || in_array($this->getUser()->getId(), $url->getAuthorizedUser())) ) {

                $this->getUser()->decremente();
                $this->getDoctrine()->getManager()->flush();

                return new RedirectResponse($this->generateUrl('message_reset', [
                    'key' => $url->getUrlToRoute(),
                    '_locale' => $request->getLocale()
                ]));
            }

            // je vais mettre ici ce bloque temporaire pour forcer l'initialisation de parcours en attendant
            // de voir avec lucien si à la fin de parcours on passe au payment ou retour

            // D'après lucien le parcours est temporairement gratuit jusqu'à nouvelle ordre

            return $this->redirectToRoute(
                'message_reset', [
                'key' => $url->getUrlToRoute(),
                '_locale' => $request->getLocale()
            ]
            );

            // fin supression 👆

            if (
                $this->getUser()
                &&
                $this->getUser()->getCredit() === 0
            ) {
                // ajout d'information pour proposer d'acheter des crédits
            }

            return $this->redirectToRoute($request->get('_route'), ['key' => $url->getUrlToRoute(), '_locale' => $request->getLocale()]);
        }

        return $this->render('home/step2.html.twig', [
            'form' => $form->createView(),
            'url'  => $url
        ]);
    }

    private function step3(Request $request, Url $url): Response
    {
        $intent = $this->stripePayment->paymentIntent(1);

        $url = $this->generateUrl('message_reset', [
            'key' => $url->getUrlToRoute(),
            '_locale' => $request->getLocale()
        ]);

        return $this->render('home/step3.html.twig', [
            'url_redirect'  => $url,
            'intent' => $intent,
            'public_key' => $this->publicKey
        ]);
    }

    /**
     * @Route({"fr": "/fr/{key}/reset", "en": "/en/{key}/reset", "es": "/es/{key}/reset", "it": "/it/{key}/ripristina"}, name="reset")
     * @Entity("url", expr="repository.findByKey(key)")
     */
    public function reset(Request $request, Url $url): Response
    {
        /**
         * @var Message[] $messages
         */
        $messages = $url->resetMessage();

        $request->getSession()->set('step', 0);

        foreach ($messages as $message) {
            $this->getDoctrine()->getManager()->remove($message);
        }

        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('message_index', ['key' => $url->getUrlToRoute(), '_locale' => $request->getLocale()]);
    }


    /**
     * @Route({"fr": "/fr/attente/{key}", "en": "/en/waiting/{key}", "es": "/es/esperando/{key}", "it": "/it/inattesa/{key}"}, name="waiting")
     */
    public function waiting(Request $request, ?string $key = null, UrlRepository $urlRepository): Response
    {
        $url = null;
        if ($key && $urlRepository->find($key)) {
            $url = $this->generateUrl('message_index', [
                'key' => $url->getUrlToRoute(),
                '_locale' => $request->getLocale()
            ]);
        }

        return $this->render('home/waiting.html.twig', [
            'url' => $url,
        ]);
    }

    /**
     * @Route({"fr": "/fr/signalement/{id}", "en": "/en/report/{id}", "it": "/it/segnalare/{id}"}, name="report")
     */
    public function report(
        Request $request,
        Message $message,
        TranslatorInterface $translator,
        ReportRepository $reportRepository,
        SerializerInterface $serializer
    ): Response
    {
        if (!$reportRepository->getByMessage($request->getClientIp(), $this->getUser(), $message->getId())) {
            $report = new Report();

            $report->setIp($request->getClientIp());

            if ($this->getUser()) {
                // Reporteur du signalement
                $report->setUser($this->getUser());
            }

            $report->setMessageId($message->getId());
            $content = $serializer->serialize($message, 'json', [
                'groups' => 'reports',
                'circular_reference_handler' => function ($object) {
                    return $object->getId();
                }
            ]);

            $report->setContent($content);

            $this->getDoctrine()->getManager()->persist($report);
            $this->getDoctrine()->getManager()->flush();
        }

        $this->addFlash('success', $translator->trans('homepage.report.message.success'));

        return $this->redirectToRoute('message_index', [
            'key' => $message->getUrl()->getUrlToRoute(),
            '_locale' => $request->getLocale()
        ]);
    }
}
