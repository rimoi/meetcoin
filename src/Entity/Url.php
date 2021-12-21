<?php

namespace App\Entity;

use App\Constant\PaymentConstant;
use App\Constant\SponsorConstant;
use App\Repository\UrlRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UrlRepository::class)
 */
class Url
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $identifiant;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $subdomain;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $domain;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $extension;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $securityKey;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="text")
     */
    private $completeUrl;

    /**
     * @ORM\Column(type="datetime")
     */
    private $timer;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $authorizedUser;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $type = PaymentConstant::PAID;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $sponsor = SponsorConstant::MEETCOIN;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="url", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $messages;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $category;

    public function isFree(): bool
    {
        return $this->type === PaymentConstant::UNLIMITED;
    }


    public function getUrlToRoute(): string
    {
        return $this->identifiant . $this->getSecurityKey();
    }

    public function resetMessage()
    {
        /**
         * @var Message[] $messages
         */
        $messages = $this->messages->toArray();

        $results = [];

        foreach ($messages as $message) {
            $message->setUrl(null);
            $results[] = $message;
        }

        return $results;
    }

    public function lastMessage()
    {
        return $this->messages->last();
    }

    public function lastStep(): ?string
    {
        $lastMessage = $this->lastMessage();
        if ($lastMessage && !$lastMessage->isArchived()) {
            return $lastMessage->getStep();
        }

        return null;
    }


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->messages = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->getSubdomain().$this->getDomain().$this->getExtension().$this->getIdentifiant().$this->getSecurityKey();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubdomain(): ?string
    {
        return $this->subdomain;
    }

    public function setSubdomain(string $subdomain): self
    {
        $this->subdomain = $subdomain;

        return $this;
    }

    public function getDomain(): ?string
    {
        return $this->domain;
    }

    public function setDomain(string $domain): self
    {
        $this->domain = $domain;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }

    public function getSecurityKey(): ?string
    {
        return $this->securityKey;
    }

    public function setSecurityKey(string $securityKey): self
    {
        $this->securityKey = $securityKey;

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

    public function getTimer(): ?\DateTimeInterface
    {
        return $this->timer;
    }

    public function setTimer(\DateTimeInterface $timer): self
    {
        $this->timer = $timer;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getIdentifiant()
    {
        return $this->identifiant;
    }

    /**
     * @param mixed $identifiant
     */
    public function setIdentifiant($identifiant): self
    {
        $this->identifiant = $identifiant;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCompleteUrl()
    {
        return $this->completeUrl;
    }

    /**
     * @param mixed $completeUrl
     */
    public function setCompleteUrl($completeUrl): self
    {
        $this->completeUrl = $completeUrl;
        return $this;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getSponsor(): ?string
    {
        return $this->sponsor;
    }

    public function setSponsor(string $sponsor): self
    {
        $this->sponsor = $sponsor;

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setUrl($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getUrl() === $this) {
                $message->setUrl(null);
            }
        }

        return $this;
    }

    public function getAuthorizedUser(): array
    {
        if ($this->authorizedUser) {
            return json_decode($this->authorizedUser, true);
        }

        return [];
    }

    /**
     * @var string|int $authorizedUser
     */
    public function setAuthorizedUser($authorizedUser): self
    {
        $data = $this->getAuthorizedUser();

        $data[] = $authorizedUser;

        $this->authorizedUser = json_encode($data);

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }
}
