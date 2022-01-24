<?php

namespace App\Controller;

use App\Entity\Banned;
use App\Repository\ReportRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BannedController extends AbstractController
{
    /**
     * @Route("/banned", name="banned", options={"expose"=true}, methods={"POST"})
     */
    public function index(Request $request): Response
    {
        $result = ['error' => false, 'message' => 'Information bien prise en compte !'];

        $banned = new Banned();

        if ($request->get('email')) {
            $banned->setEmail($request->get('email'));
        }
        if ($request->get('snap')) {
            $banned->setSnap($request->get('snap'));
        }
        if ($request->get('insta')) {
            $banned->setInsta($request->get('insta'));
        }
        if ($request->get('messenger')) {
            $banned->setMessenger($request->get('messenger'));
        }
        if ($request->get('content')) {
            $banned->setContent($request->get('content'));
        }
        if ($request->get('messageId')) {
            $banned->setMessageId($request->get('messageId'));
        }
        if ($request->get('comment')) {
            $banned->setComment($request->get('comment'));
        }
        if ($request->get('reportId')) {
            $banned->setReportId($request->get('reportId'));
        }
        $this->getDoctrine()->getManager()->persist($banned);
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse($result);
    }

    /**
     * @Route("/valid", name="valid", options={"expose"=true}, methods={"POST"})
     */
    public function valid(Request $request, ReportRepository $reportRepository): Response
    {
        $result = ['error' => true, 'message' => 'Une erreur est survenue !'];

        if ($request->get('reportId')) {
            $report = $reportRepository->find($request->get('reportId'));
            if ($report) {
                $report->setVerified(true);
//                $this->getDoctrine()->getManager()->remove($report);
                $this->getDoctrine()->getManager()->flush();

                return new JsonResponse(['error' => false, 'message' => 'Tout est okay !']);
            }
        }

        return new JsonResponse($result);
    }
}
