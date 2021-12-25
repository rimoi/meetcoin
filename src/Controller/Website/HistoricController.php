<?php

namespace App\Controller\Website;

use App\Repository\MessageRepository;
use App\Repository\UrlRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HistoricController extends AbstractController
{
    /**
     * @Route("/historic", name="historic")
     */
    public function index(UrlRepository $urlRepository): Response
    {
        $urls = $urlRepository->findHistoricByUser($this->getUser()->getId());

        return $this->render('historic/index.html.twig', compact('urls'));
    }
}
