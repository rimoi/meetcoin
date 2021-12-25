<?php

namespace App\Controller;

use App\Constant\PaymentConstant;
use App\Entity\Message;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\EmailVerifier;
use App\Security\LoginFromAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;

class RegistrationController extends AbstractController
{
    private $emailVerifier;
    private $emailToSend;
    private $translator;

    public function __construct(
        EmailVerifier $emailVerifier,
        TranslatorInterface $translator,
        string $emailToSend
    ){
        $this->emailVerifier = $emailVerifier;
        $this->emailToSend = $emailToSend;
        $this->translator = $translator;
    }

    /**
     * @Route({"fr": "/creation-compte", "en": "/en/register", "es": "/es/registrar", "it": "/it/registrare"}, name="app_register")
     */
    public function register(
        Request $request,
        UserPasswordEncoderInterface $userPasswordEncoderInterface,
        GuardAuthenticatorHandler $guardHandler,
        LoginFromAuthenticator $authenticator,
        TranslatorInterface $translator
    ): Response
    {
        $id = $request->get('id');

        if ($id) {
            $request->getSession()->get('id_message', $id);
        }

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $request->get('registration_form');

            $user->setEmail($data['email']['first']);
            if ($this->getDoctrine()->getManager()->getRepository(User::class)->findOneBy(['email' => $user->getEmail()])) {
                $formError = new FormError($translator->trans('homepage.error.user_already_exist'));
                $form->get('email')->get('first')->addError($formError);

                return $this->render('registration/register.html.twig', [
                    'registrationForm' => $form->createView(),
                ]);
            }

            // encode the plain password
            $user->setPassword(
            $userPasswordEncoderInterface->encodePassword(
                    $user,
                    $data['password']['first']
                )
            );
            $user->setRoles(['ROLE_USER']);

            $user->messageId = $id;

            $user->setLanguage($request->getLocale());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address($this->emailToSend, 'Meetcoin'))
                    ->to($user->getEmail())
                    ->subject($this->translator->trans('homepage.email.confirm_email'))
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email

            if ($id) {
                $message = $this->getDoctrine()->getRepository(Message::class)->find($id);

                return $this->redirectToRoute('message_waiting', [
                    'key' => $message->getUrl()->getUrlToRoute(),
                    '_locale' => $request->getLocale()
                ]);
            }

            return $this->redirectToRoute('message_waiting', ['key' => 'check']);
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    /**
     * @Route("/verify/email", name="app_verify_email")
     */
    public function verifyUserEmail(
        Request $request,
        UserRepository $userRepository,
        TokenStorageInterface $tokenStorage,
        EventDispatcherInterface $dispatcher,
        GuardAuthenticatorHandler $guardAuthenticatorHandler,
        LoginFromAuthenticator $authenticator
    ): Response
    {
        $id = $request->get('id');
        $locale = $request->get('locale');

        if (null === $id) {
            return $this->redirectToRoute('app_register');
        }

        $user = $userRepository->find($id);

        if (null === $user) {
            return $this->redirectToRoute('app_register');
        }
        $message = null;
        $messageId = $request->get('messageId');
        if ($messageId) {
            $request->getSession()->get('id_message', $id);
            $message = $this->getDoctrine()->getManager()->find(Message::class, $messageId);
            $url = $message->getUrl();
            $url->setAuthorizedUser($user->getId());
            $user->setCredit(10);
            $this->getDoctrine()->getManager()->flush();

            $url = $this->generateUrl('message_index', [
                'key' => $message->getUrl()->getUrlToRoute(),
                '_locale' => $locale
            ]);
            $request->getSession()->set('url_redirection', $url);
        }

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $user);
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('danger', $exception->getReason());

            return $this->redirectToRoute('app_register');
        }

        $guardAuthenticatorHandler->authenticateUserAndHandleSuccess(
            $user,
            $request,
            $authenticator,
            'main' // firewall name in security.yaml
        );

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', $this->translator->trans('homepage.email.email_verified'));

        if ($message) {
            return $this->redirectToRoute('message_index', [
                'key' => $message->getUrl()->getUrlToRoute(),
                '_locale' => $locale
            ]);
        }

        // ici je dois rédiriger vers le bon meetcoin après creation de compte
        return $this->redirectToRoute('app_register');
    }
}
