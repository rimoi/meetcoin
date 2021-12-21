<?php

namespace App\Controller;

use App\Constant\PaymentConstant;
use App\Service\GenerateUrl;
use App\Service\ResetUrl;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/reset/", name="reset_")
 */
class ResetUrlController extends AbstractController
{
    /**
     * @Route("/url", name="url", options={"expose"=true}, methods={"POST"})
     */
    public function index(Request $request, ResetUrl $resetUrl): Response
    {
        $error = 1;

        $id = $request->get('id');

        if (!$id) {
            return new JsonResponse(['error' => -1]);
        }

        try {
            $resetUrl->reset($id);
        } catch (\Exception $exception) {
            $error = 0;
        }

        return new JsonResponse(compact('error'));
    }
}
