<?php

namespace App\Controller\Website;

use App\Repository\SaveMeetcoinByUserRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SavedController extends AbstractController
{
    /**
     * @IsGranted("ROLE_USER")
     * @Route("/meetcoin/saved", name="saved")
     */
    public function index(SaveMeetcoinByUserRepository $saveMeetcoinByUserRepository): Response
    {
        $urls = $saveMeetcoinByUserRepository->findBy(['user' => $this->getUser()]);

        return $this->render('saved/index.html.twig', compact('urls'));
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/meetcoin/comment/saved", name="comment_saved", options={"expose"= true}, methods={"POST"})
     */
    public function saveComment(Request $request, SaveMeetcoinByUserRepository $saveMeetcoinByUserRepository): Response
    {
        $content = $request->get('content', null);

        $saveMeetcoin = $request->get('save_message_id', null);

        $url = $saveMeetcoinByUserRepository->find($saveMeetcoin);

        if ($content) {
            $url->setComment($content);
        }

        $this->getDoctrine()->getManager()->flush();

        return $this->json(['success' => true]);
    }
}
