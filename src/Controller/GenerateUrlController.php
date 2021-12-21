<?php

namespace App\Controller;

use App\Constant\PaymentConstant;
use App\Service\GenerateUrl;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/generate/", name="generate_")
 */
class GenerateUrlController extends AbstractController
{
    /**
     * @Route("/url", name="url", options={"expose"=true}, methods={"POST"})
     */
    public function index(Request $request, GenerateUrl $generateUrl): Response
    {
        $error = false;

        $type = $request->get('type');
        $limit = $request->get('limit');
        $category = $request->get('category');

        try {
            $generateUrl->generate($type, $limit, $category);
        } catch (\Exception $exception) {
            $error = true;
        }

        return new JsonResponse(compact('error'));
    }
}
