<?php
declare(strict_types=1);
namespace App\Service;

use App\Entity\Message;
use App\Entity\Report;
use App\Repository\BannedRepository;
use App\Repository\ReportRepository;

class ReportManager
{
    private $bannedRepository;

    private $reportRepository;

    public function __construct(
        BannedRepository $bannedRepository,
        ReportRepository $reportRepository
    )
    {
        $this->bannedRepository = $bannedRepository;
        $this->reportRepository = $reportRepository;
    }

    public function checkIsBanned(Message $message): bool
    {
        if (
            $message->getEmail()
            &&
            $this->bannedRepository->findOneBy(['email' => $message->getEmail()])
        ) {
            return true;
        }
        if (
            $message->getSnap()
            &&
            $this->bannedRepository->findOneBy(['snap' => $message->getSnap()])
        ) {
            return true;
        }
        if (
            $message->getMessenger()
            &&
            $this->bannedRepository->findOneBy(['messenger' => $message->getMessenger()])
        ) {
            return true;
        }
        if (
            $message->getInsta()
            &&
            $this->bannedRepository->findOneBy(['insta' => $message->getInsta()])
        ) {
            return true;
        }

        return false;
    }


    /**
     * @param Message[] $messages
     */
    public function checkIfMessageIsValid(array $messages): void
    {
        foreach ($messages as $key => $message) {
            $this->checkIsVerified($message);

            $messages[$key] = $message;
        }
    }

    /**
     * @param Message[] $messages
     */
    public function checkIfMessageIsBanned(array $messages): void
    {
        foreach ($messages as $key => $message) {
            $this->checkIfIsBanned($message);

            $messages[$key] = $message;
        }
    }
    private function checkIsVerified(Message $message): void
    {
        $report = $message->report;

        $message->verified = $this->reportRepository->findIsVerified($report, $message);
    }

    private function checkIfIsBanned(Message $message): void
    {
        $report = $message->report;

        $message->banned = $this->reportRepository->findIsBanned($report, $message);
    }
}
