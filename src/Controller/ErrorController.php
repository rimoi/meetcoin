<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ErrorController extends AbstractController
{
    /**
     * @Route("/error", name="show")
     */
    public function show(): Response
    {
        return $this->render('error/show.html.twig', [
            'controller_name' => 'ErrorController',
        ]);
    }
}
