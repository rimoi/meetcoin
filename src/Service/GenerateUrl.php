<?php
declare(strict_types=1);
namespace App\Service;

use App\Constant\PaymentConstant;
use App\Entity\Url;
use Doctrine\ORM\EntityManagerInterface;

class GenerateUrl
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function generate(string $type = PaymentConstant::PAID, int $maxNumber = 999)
    {
        $lastOne = $this->entityManager->getRepository(Url::class)->findOneBy([], ['id' => 'DESC']);
        $lastId = 0;
        if (null !== $lastOne) {
            $lastId = $lastOne->getId();
        }

        for ($i = $lastId + 1; $i <= $lastId + $maxNumber; $i++) {
            // on crée une URL
            $url = new Url();
            $url->setSubdomain('icebreak.');
            $url->setDomain('meetcoin');
            $url->setExtension('.fr/message/');
            $url->setIdentifiant($i);
            $url->setSecurityKey('@'.uniqid('', true));
            $url->setTimer(new \DateTime());
            $url->setCompleteUrl($url->__toString());
            $url->setType($type);

            $this->entityManager->persist($url);
        }

        // Stockage des Urls en base de données
        $this->entityManager->flush();
    }
}
