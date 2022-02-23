<?php

namespace App\Repository;

use App\Entity\SaveMeetcoinByUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SaveMeetcoinByUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method SaveMeetcoinByUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method SaveMeetcoinByUser[]    findAll()
 * @method SaveMeetcoinByUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SaveMeetcoinByUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SaveMeetcoinByUser::class);
    }

    // /**
    //  * @return SaveMeetcoinByUser[] Returns an array of SaveMeetcoinByUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SaveMeetcoinByUser
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
