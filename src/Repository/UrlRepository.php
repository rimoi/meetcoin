<?php

namespace App\Repository;

use App\Entity\Url;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Url|null find($id, $lockMode = null, $lockVersion = null)
 * @method Url|null findOneBy(array $criteria, array $orderBy = null)
 * @method Url[]    findAll()
 * @method Url[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UrlRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Url::class);
    }

    /**
     * @return Url[] Returns an array of Url objects
     */
    public function findUrlByTranche(array $lignes)
    {
        [$debut, $fin] = $lignes;

        return $this->createQueryBuilder('u')
            ->where('u.identifiant >= :debut')
            ->andWhere('u.identifiant <= :fin')
            ->setParameter('debut', $debut)
            ->setParameter('fin', $fin)
            ->orderBy('u.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @return Url|null
     */
    public function findByKey(string $idAndKey)
    {
        if (!stristr($idAndKey, '@')) {
            return null;
        }

        [$id, $securityKey] = explode('@', $idAndKey);

        return $this->findOneBy([
            'securityKey' => '@'.$securityKey,
            'identifiant' => $id
        ]);
    }

    public function findMeetcoinByUser(User $user): array
    {
        return $this->createQueryBuilder('u')
            ->where('u.userVisited LIKE :visited')
            ->setParameter('visited', '%'.$user->getId().'%')
            ->getQuery()
            ->getResult();
    }
}
