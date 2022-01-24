<?php
declare(strict_types=1);
namespace App\Service;

use App\Entity\Message;
use App\Repository\BannedRepository;

class ReportManager
{
    private $bannedRepository;

    public function __construct(BannedRepository $bannedRepository)
    {
        $this->bannedRepository = $bannedRepository;
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
}
