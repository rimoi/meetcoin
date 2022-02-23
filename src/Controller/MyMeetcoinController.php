<?php

namespace App\Controller;

use App\Repository\UrlRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyMeetcoinController extends AbstractController
{
    /**
     * @Route("/my/meetcoin", name="my_meetcoin")
     * @IsGranted("ROLE_USER")
     */
    public function index(UrlRepository $urlRepository): Response
    {
        $urls = $urlRepository->findMeetcoinByUser($this->getUser());

        return $this->render('my_meetcoin/index.html.twig', compact('urls'));
    }
}
