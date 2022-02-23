<?php

namespace App\Controller\Website;

use App\Entity\SaveMeetcoinByUser;
use App\Entity\Url;
use App\Factory\SaveMeetcoinFactory;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class SaveMeetcoinController extends AbstractController
{
    /**
     * @Route({"fr": "/enregistrer/meetcoin/user/{token}", "en": "/save/meetcoin/user/{key}"}, name="message_save")
     * @Entity("url", expr="repository.findByKey(token)")
     */
    public function index(
        Request $request,
        Url $url,
        EntityManagerInterface $entityManager,
        TranslatorInterface $translator
    ): Response
    {
        if (!$this->getUser()) {
            $params = [];
            if ($url->lastMessage() && $url->lastMessage()->getId()) {
                $params = [
                    'id' => $url->lastMessage()->getId(),
                    SaveMeetcoinByUser::SAVE_MEETCOIN => SaveMeetcoinByUser::SAVE_MEETCOIN
                ];
            }

            return $this->redirectToRoute('app_login', $params);
        }

        $redirectRoute = $this->redirectToRoute('message_index', [
                'key' => $url->getUrlToRoute(),
                '_locale' => $request->getLocale()]
        );

        $this->addFlash('success', $translator->trans('homepage.form.message.label_save'));

        $isExist = $this->getDoctrine()->getManager()->getRepository(SaveMeetcoinByUser::class)->findOneBy([
            'user' => $this->getUser(),
            'message' => $url->lastMessage(),
        ]);

        if ($isExist) {
            return $redirectRoute;
        }

        $saveUserByFactory = SaveMeetcoinFactory::create(
            $url->lastMessage(),
            $this->getUser(),
            $request
        );

        $entityManager->persist($saveUserByFactory);
        $entityManager->flush();

        return $redirectRoute;
    }
}
