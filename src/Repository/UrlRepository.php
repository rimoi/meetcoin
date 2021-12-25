<?php

namespace App\Repository;

use App\Entity\Url;
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
     * @return Url[] Returns an array of Url objects
     */
    public function findByKey(string $idAndKey)
    {
        [$id, $securityKey] = explode('@', $idAndKey);

        return $this->findOneBy([
            'securityKey' => '@'.$securityKey,
            'identifiant' => $id
        ]);
    }

    /**
     * @return Url[] Returns an array of Url objects
     */
    public function findHistoricByUser(int $id)
    {
        return $this->createQueryBuilder('u')
            ->where('u.userVisited like :visited')
            ->setParameter('visited', '%'.$id.'%')
            ->getQuery()
            ->getResult();
    }


    // /**
    //  * @return Url[] Returns an array of Url objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Url
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
