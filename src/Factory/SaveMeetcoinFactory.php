<?php

namespace App\Factory;

use App\Entity\Message;
use App\Entity\SaveMeetcoinByUser;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;

class SaveMeetcoinFactory
{
    public static function create(Message $message, User $user, Request $request): SaveMeetcoinByUser
    {
        $saveMeetcoinByUser = new SaveMeetcoinByUser();
        $saveMeetcoinByUser->setMessage($message);
        $saveMeetcoinByUser->setUser($user);
        $saveMeetcoinByUser->setIp($request->getClientIp());

        return $saveMeetcoinByUser;
    }
}
