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

    public function generate(string $type = PaymentConstant::PAID, int $maxNumber = 999, ?string $category = null)
    {
        $lastOne = $this->entityManager->getRepository(Url::class)->findOneBy([], ['id' => 'DESC']);
        $lastId = 0;
        if (null !== $lastOne) {
            $lastId = $lastOne->getId();
        }

        for ($i = $lastId + 1; $i <= $lastId + $maxNumber; $i++) {
            // on crée une URL
            $url = new Url();
            $url->setSubdomain('');
            $url->setDomain('meetcoin');
            $url->setExtension('.app/');
            $url->setIdentifiant($i);
            $url->setSecurityKey('@'.uniqid('', true));
            $url->setTimer(new \DateTime());
            $url->setCompleteUrl($url->__toString());
            $url->setType($type);

            if ($category) {
                $url->setCategory($category);
            }

            $this->entityManager->persist($url);
        }

        // Stockage des Urls en base de données
        $this->entityManager->flush();
    }
}
