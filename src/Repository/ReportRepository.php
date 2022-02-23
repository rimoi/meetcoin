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
        $condition = '';

        $parameters = [];

        if ($message->getEmail()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= ' r.content like :email';

            $parameters['email'] = '%"email":"'.$message->getEmail().'"%';
        }
        if ($message->getSnap()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :snap';
            $parameters['snap'] = '%"snap":"'.$message->getSnap().'"%';
        }

        if ($message->getMessenger()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :messenger';
            $parameters['messenger'] = '%"messenger":"'.$message->getMessenger().'"%';
        }

        if ($message->getInsta()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.content like :insta';
            $parameters['insta'] = '%"insta":"'.$message->getInsta().'"%';
        }
        if ($report->getIp()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.ip = :ip';
            $parameters['ip'] = $report->getIp();
        }

        $dql = 'SELECT r FROM App:Report r';
        if ($condition) {
            $dql .= " WHERE ( $condition )";
        }

        $dql .= ' ORDER BY r.createdAt DESC';

        $qb = $this->_em->createQuery($dql);
        $qb->setParameters(
            $parameters
        );

        return $qb->getResult();
    }

    public function findIsVerified(Report $report, Message $message): bool
    {
        $condition = '';

        $parameters = [];

        if ($message->getEmail()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= ' r.content like :email';

            $parameters['email'] = '%"email":"'.$message->getEmail().'"%';
        }
        if ($message->getSnap()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :snap';
            $parameters['snap'] = '%"snap":"'.$message->getSnap().'"%';
        }

        if ($message->getMessenger()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :messenger';
            $parameters['messenger'] = '%"messenger":"'.$message->getMessenger().'"%';
        }

        if ($message->getInsta()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.content like :insta';
            $parameters['insta'] = '%"insta":"'.$message->getInsta().'"%';
        }
        if ($report->getIp()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.ip = :ip';
            $parameters['ip'] = $report->getIp();
        }

        $parameters['verified'] = false;

        $dql = 'SELECT r FROM App:Report r WHERE r.verified = :verified';
        if ($condition) {
            $dql .= " AND ( $condition )";
        }

        $dql .= ' ORDER BY r.createdAt DESC';

        $qb = $this->_em->createQuery($dql);
        $qb->setParameters(
            $parameters
        );

        return !!!$qb->getOneOrNullResult();
    }

    public function findIsBanned(Report $report, Message $message): bool
    {
        $condition = '';

        $parameters = [];

        if ($message->getEmail()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= ' r.content like :email';

            $parameters['email'] = '%"email":"'.$message->getEmail().'"%';
        }
        if ($message->getSnap()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :snap';
            $parameters['snap'] = '%"snap":"'.$message->getSnap().'"%';
        }

        if ($message->getMessenger()) {
            if($condition) {
                $condition .= ' OR ';
            }

            $condition .= 'r.content like :messenger';
            $parameters['messenger'] = '%"messenger":"'.$message->getMessenger().'"%';
        }

        if ($message->getInsta()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.content like :insta';
            $parameters['insta'] = '%"insta":"'.$message->getInsta().'"%';
        }
        if ($report->getIp()) {
            if($condition) {
                $condition .= ' OR ';
            }
            $condition .= 'r.ip = :ip';
            $parameters['ip'] = $report->getIp();
        }

        $dql = 'SELECT r FROM App:Report r INNER JOIN App:Banned b WITH (b.reportId = r.id)';
        if ($condition) {
            $dql .= " WHERE $condition";
        }

        $dql .= ' ORDER BY r.createdAt DESC';

        $qb = $this->_em->createQuery($dql);
        $qb->setParameters(
            $parameters
        );

        return !!$qb->getOneOrNullResult();
    }
}
