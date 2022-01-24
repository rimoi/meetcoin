<?php

namespace App\Repository;

use App\Entity\Message;
use App\Entity\Report;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Report|null find($id, $lockMode = null, $lockVersion = null)
 * @method Report|null findOneBy(array $criteria, array $orderBy = null)
 * @method Report[]    findAll()
 * @method Report[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Report::class);
    }

    public function getByMessage(string $ip, ?User $user, ?int $message): array
    {
        $qb = $this->createQueryBuilder('r');

        $qb->where('r.ip = :ip');
        $qb->setParameter('ip', $ip);

        if ($user) {
            $qb->andWhere('r.user = :user');
            $qb->setParameter('user', $user);
        }
        if ($message) {
            $qb->andWhere('r.messageId = :message');
            $qb->setParameter('message', $message);
        }

        return $qb
            ->getQuery()
            ->getResult();
    }

    public function findDuplicateDate(Report $report, Message $message): array
    {
        $qb = $this->createQueryBuilder('r');
        $qb->where('r <> :report')
            ->setParameter('report', $report);

        if ($message->getEmail()) {
            $qb->orWhere('r.content like :email')
                ->setParameter('email', '%"email":"'.$message->getEmail().'"%');
        }

        if ($message->getSnap()) {
            $qb->orWhere('r.content like :snap')
                ->setParameter('snap', '%"snap":"'.$message->getSnap().'"%');
        }

        if ($message->getMessenger()) {
            $qb->orWhere('r.content like :messenger')
                ->setParameter('messenger', '%"messenger":"'.$message->getMessenger().'"%');
        }

        if ($message->getInsta()) {
            $qb->orWhere('r.content like :insta')
                ->setParameter('insta', '%"insta":"'.$message->getInsta().'"%');
        }
        if ($report->getIp()) {
            $qb->orWhere('r.ip = :ip')
                ->setParameter('ip', $report->getIp());
        }

        return $qb->getQuery()->getResult();
    }
}
