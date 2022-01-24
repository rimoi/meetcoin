<?php

namespace App\Entity;

use App\Repository\BannedRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BannedRepository::class)
 * @ORM\Table(name="banned",
 * indexes={
 *  @ORM\Index(name="banned_index_email", columns={"email"}),
 *  @ORM\Index(name="banned_index_insta", columns={"insta"}),
 *  @ORM\Index(name="banned_index_snap", columns={"snap"}),
 *  @ORM\Index(name="banned_index_messenger", columns={"messenger"}),
 *  @ORM\Index(name="banned_index_content", columns={"content"})
 * })
 */
class Banned
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $insta;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $messenger;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $snap;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $messageId;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $comment;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $reportId;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getInsta(): ?string
    {
        return $this->insta;
    }

    public function setInsta(?string $insta): self
    {
        $this->insta = $insta;

        return $this;
    }

    public function getMessenger(): ?string
    {
        return $this->messenger;
    }

    public function setMessenger(?string $messenger): self
    {
        $this->messenger = $messenger;

        return $this;
    }

    public function getSnap(): ?string
    {
        return $this->snap;
    }

    public function setSnap(?string $snap): self
    {
        $this->snap = $snap;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getMessageId(): ?int
    {
        return $this->messageId;
    }

    public function setMessageId(int $messageId): self
    {
        $this->messageId = $messageId;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getReportId(): ?int
    {
        return $this->reportId;
    }

    public function setReportId(?int $reportId): self
    {
        $this->reportId = $reportId;

        return $this;
    }
}
