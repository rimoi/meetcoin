<?php
declare(strict_types=1);
namespace App\Service;

use App\Entity\Url;
use Doctrine\ORM\EntityManagerInterface;

class ResetUrl
{
    /** @var EntityManagerInterface */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function reset(array $ids): bool
    {
        $urls = $this->entityManager->getRepository(Url::class)->findBy(['identifiant' => $ids]);

        foreach ($urls as $url) {
            $url->resetMessage();
        }
        // Stockage des Urls en base de données
        $this->entityManager->flush();

        return (bool) $urls;
    }
}
