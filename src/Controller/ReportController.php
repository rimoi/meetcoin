<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\Report;
use App\Repository\ReportRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/lucien", name="report_")
 */
class ReportController extends AbstractController
{
    /**
     * @Route("/report", name="index")
     */
    public function index(ReportRepository $reportRepository, SerializerInterface $serializer): Response
    {
        $reports = $reportRepository->findBy([], ['id' => 'DESC']);

        $messages = [];

        $emails = [];
        $emailsDuplicated = [];

        $snaps = [];
        $snapsDuplicated = [];

        $messengers = [];
        $messengersDuplicated = [];

        $instas = [];
        $instasDuplicated = [];

        $ips = [];
        $ipSignaleurs = [];

        foreach ($reports as $report) {
            if (!$report->getContent()) {
                continue;
            }

            /** @var Message $message */
            $message = $serializer->deserialize($report->getContent(), Message::class, 'json');
            $message->report = $report;


            if ($message->getEmail() && in_array($message->getEmail(), $emails)) {
                $emailsDuplicated[$message->getEmail()]++;
            } else {
                $emails[] = $message->getEmail();
                $emailsDuplicated[$message->getEmail()] = 1;
            }
            if ($message->getInsta() && in_array($message->getInsta(), $instas)) {
                $instasDuplicated[$message->getInsta()]++;
            } else {
                $instas[] = $message->getInsta();
                $instasDuplicated[$message->getInsta()] = 1;
            }
            if ($message->getMessenger() && in_array($message->getMessenger(), $messengers)) {
                $messengersDuplicated[$message->getMessenger()]++;
            } else {
                $messengers[] = $message->getMessenger();
                $messengersDuplicated[$message->getMessenger()] = 1;
            }
            if ($message->getSnap() && in_array($message->getSnap(), $snaps)) {
                $snapsDuplicated[$message->getSnap()]++;
            } else {
                $snaps[] = $message->getSnap();
                $snapsDuplicated[$message->getSnap()] = 1;
            }
            if ($report->getIp() && in_array($report->getIp(), $ipSignaleurs)) {
                $ipSignaleurs[$report->getIp()]++;
            } else {
                $ips[] = $report->getIp();
                $ipSignaleurs[$report->getIp()] = 1;
            }

            $messages[] = $message;
        }


        return $this->render('report/index.html.twig', compact(
            'messages',
            'emailsDuplicated',
            'messengersDuplicated',
            'instasDuplicated',
            'snapsDuplicated',
            'ipSignaleurs'
        ));
    }

    /**
     * @Route("/report/show/{identifiant}", name="show")
     */
    public function show(
        Report $report,
        SerializerInterface $serializer,
        ReportRepository $reportRepository
    ): Response
    {
        $messages = [];

        $message = $serializer->deserialize($report->getContent(), Message::class, 'json');

        $reports = $reportRepository->findDuplicateDate($report, $message);

        foreach ($reports as $report) {
            /** @var Message $message */
            $message = $serializer->deserialize($report->getContent(), Message::class, 'json');
            $message->report = $report;

            $messages[] = $message;
        }

        return $this->render('report/show.html.twig', [
            'messages' => $messages,
        ]);
    }
}
