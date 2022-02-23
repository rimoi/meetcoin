<?php

namespace App\Controller;

use App\Entity\Message;
use App\Entity\Report;
use App\Repository\BannedRepository;
use App\Repository\ReportRepository;
use App\Service\ReportManager;
use App\Traits\ArrayTrait;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/lucien", name="report_")
 */
class ReportController extends AbstractController
{
    use ArrayTrait;

    /**
     * @Route("/report", name="index")
     */
    public function index(
        ReportRepository $reportRepository,
        ReportManager $reportManager,
        SerializerInterface $serializer
    ): Response
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

        $allMessages = [];

        foreach ($reports as $key => $report) {
            if (!$report->getContent()) {
                continue;
            }

            /** @var Message $message */
            $message = $serializer->deserialize($report->getContent(), Message::class, 'json');
            $message->report = $report;

            $count = false;

            if ($message->getEmail()) {
                if (in_array($message->getEmail(), $emails)) {
                    $emailsDuplicated[$message->getEmail()]++;
                    $count = true;
                } else {
                    $emails[] = $message->getEmail();
                    $emailsDuplicated[$message->getEmail()] = 1;
                }
            }

            if ($message->getInsta()) {
                if (in_array($message->getInsta(), $instas)) {
                    $instasDuplicated[$message->getInsta()]++;
                    $count = true;
                } else {
                    $instas[] = $message->getInsta();
                    $instasDuplicated[$message->getInsta()] = 1;
                }
            }

            if ($message->getMessenger()) {
                if (in_array($message->getMessenger(), $messengers)) {
                    $messengersDuplicated[$message->getMessenger()]++;
                    $count = true;
                } else {
                    $messengers[] = $message->getMessenger();
                    $messengersDuplicated[$message->getMessenger()] = 1;
                }
            }

            if ($message->getSnap()) {
                if (in_array($message->getSnap(), $snaps)) {
                    $snapsDuplicated[$message->getSnap()]++;
                    $count = true;
                } else {
                    $snaps[] = $message->getSnap();
                    $snapsDuplicated[$message->getSnap()] = 1;
                }
            }
            if ($report->getIp()) {
                if (in_array($report->getIp(), $ips)) {
                    $ipSignaleurs[$report->getIp()]++;
                    $count = true;
                } else {
                    $ips[] = $report->getIp();
                    $ipSignaleurs[$report->getIp()] = 1;
                }
            }

            if (!$count || $key === 0) {
                $messages[$report->getCreatedAt()->format('YmdHis')] = $message;
            }
        }

        krsort($messages);

        $reportManager->checkIfMessageIsValid($messages);
        $reportManager->checkIfMessageIsBanned($messages);

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
        ReportRepository $reportRepository,
        BannedRepository $bannedRepository
    ): Response
    {
        $messages = [];

        $message = $serializer->deserialize($report->getContent(), Message::class, 'json');

        $reports = $reportRepository->findDuplicateDate($report, $message);

        $reportIds = [];

        foreach ($reports as $report) {
            /** @var Message $message */
            $message = $serializer->deserialize($report->getContent(), Message::class, 'json');
            $message->report = $report;

            $reportIds[] = $report->getId();

            $messages[$report->getCreatedAt()->format('YmdHis')] = $message;
        }

        $bannisements = [];
        if ($reportIds) {
            $bannisements = $bannedRepository->findBy(['reportId' => $reportIds]);
            $bannisements = $this->groupBy($bannisements, 'reportId');
        }

        krsort($messages);

        return $this->render('report/show.html.twig', compact('messages', 'bannisements'));
    }
}
