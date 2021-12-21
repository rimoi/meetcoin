<?php

namespace App\Controller\Website;

use App\Entity\Image;
use App\Entity\Message;
use App\Entity\User;
use App\Form\MessageType;
use App\Form\UserType;
use App\Repository\MessageRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;


/**
 * @Route({"fr": "/espace-client", "en": "/customer-area", "es": "/area-de-cliente"}, name="espace_client_")
 * @IsGranted("ROLE_USER")
 */
class EspaceClientController extends AbstractController
{

    /**
     * @var TranslatorInterface
     */
    private $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * @Route({"fr": "/", "en": "/", "es": "/"}, name="index")
     */
    public function index(MessageRepository $messageRepository): Response
    {
        $reglages = $messageRepository->findBy(['user' => $this->getUser()]);

        return $this->render('espace_client/index.html.twig', compact('reglages'));
    }

    /**
     * @Route({"fr": "/prereglage", "en": "/preset", "es": "/preestablecido"}, name="preset")
     */
    public function preset(Request $request): Response
    {
        $message = new Message();
        $message->setPrereglage(true);

        $form = $this->createForm(MessageType::class, $message, ['name_prereglage' => true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $message->setLanguage($request->getLocale());
            $message->setUser($this->getUser());

            $em = $this->getDoctrine()->getManager();
            $em->persist($message);
            $em->flush();

            $this->addFlash('succes', $this->translator->trans('homepage.espace_client.alert.reglage_created', ['name' => $message->getNameReglage()]));

            return $this->redirectToRoute('espace_client_index', [ '_locale' => $request->getLocale()]);
        }

        return $this->render('espace_client/preset.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route({"fr": "/{id}/edit", "en": "/{id}/edit", "es": "/{id}/editar"}, name="edit")
     */
    public function edit(Message $message, Request $request): Response
    {
        $form = $this->createForm(MessageType::class, $message, ['name_prereglage' => true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $message->setLanguage($request->getLocale());
            $message->setUser($this->getUser());

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('succes', $this->translator->trans('homepage.espace_client.alert.reglage_edited', ['name' => $message->getNameReglage()]));

            return $this->redirectToRoute('espace_client_index', [ '_locale' => $request->getLocale()]);
        }

        return $this->render('espace_client/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

//    /**
//     * @Route({"fr": "/{id}/modifier", "en": "/{id}/edit", "es": "/{id}/editar"}, name="user_edit", methods={"GET","POST"})
//     */
//    public function edit(Request $request, User $user): Response
//    {
//        $form = $this->createForm(UserType::class, $user);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            /**
//             * @var Image $image
//             */
//            $image = $form->get('image')->getData();
//            if ($image) {
//                $image->setName(uniqid('', true));
//            }
//
//            $this->getDoctrine()->getManager()->flush();
//
//            return $this->redirectToRoute('user_index', [], Response::HTTP_SEE_OTHER);
//        }
//
//        return $this->render('user/edit.html.twig', [
//            'user' => $user,
//            'form' => $form->createView(),
//        ]);
//    }
}
