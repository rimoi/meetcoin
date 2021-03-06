<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;

use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    public const SAVE_MEETCOIN = 'save_meetcoin';

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $nameReglage;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $insta;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $messenger;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $snap;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $email;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"reports"})
     */
    private $message;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"reports"})
     */
    private $timeToShowMessage;

    /**
     * @var bool
     * @ORM\Column(type="boolean")
     * @Groups({"reports"})
     */
    private $archived = false;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="create")
     * @Groups({"reports"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Url::class, inversedBy="messages")
     * @ORM\JoinColumn(nullable=true)
     * @Groups({"reports"})
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reports"})
     */
    private $language;

    /**
     * Les ??tapes
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $step;

    /**
     * @ORM\OneToMany(targetEntity=Payment::class, mappedBy="message")
     */
    private $payments;

    /**
     * @ORM\Column(type="boolean", options={"default"="0"})
     */
    private $isPrereglage = false;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="messages")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reports"})
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reports"})
     */
    private $ip;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $possibilityToSave;

    /**
     * @ORM\OneToMany(targetEntity=SaveMeetcoinByUser::class, mappedBy="message")
     */
    private $saveMeetcoinByUsers;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $scanned = false;

    public function cantSaved(): bool
    {
        if ($this->possibilityToSave) {
            return !$this->saveMeetcoinByUsers->first();
        }

        return false;
    }

    public function __construct()
    {
        $this->payments = new ArrayCollection();
        $this->reports = new ArrayCollection();
        $this->saveMeetcoinByUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /** @param ?int $id */
    public function setId(?int $id): void
    {
        $this->id = $id;
    }


    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTimeToShowMessage()
    {
        return $this->timeToShowMessage;
    }

    /**
     * @param mixed $timeToShowMessage
     */
    public function setTimeToShowMessage($timeToShowMessage): self
    {
        $this->timeToShowMessage = $timeToShowMessage;
        return $this;
    }

    public function getUrl(): ?Url
    {
        return $this->url;
    }

    public function setUrl(?Url $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function isArchived(): bool
    {
        return $this->archived;
    }

    public function setArchived(bool $archived): self
    {
        $this->archived = $archived;

        return $this;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language): self
    {
        $this->language = $language;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getStep()
    {
        return $this->step;
    }

    /**
     * @param mixed $step
     */
    public function setStep($step): self
    {
        $this->step = $step;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): self
    {
        $this->type = $type;
        return $this;
    }

    /**
     * @return Collection|Payment[]
     */
    public function getPayments(): Collection
    {
        return $this->payments;
    }

    public function addPayment(Payment $payment): self
    {
        if (!$this->payments->contains($payment)) {
            $this->payments[] = $payment;
            $payment->setMessage($this);
        }

        return $this;
    }

    public function removePayment(Payment $payment): self
    {
        if ($this->payments->removeElement($payment)) {
            // set the owning side to null (unless already changed)
            if ($payment->getMessage() === $this) {
                $payment->setMessage(null);
            }
        }

        return $this;
    }

    public function isPrereglage(): ?bool
    {
        return $this->isPrereglage;
    }

    public function setPrereglage(bool $isPrereglage): self
    {
        $this->isPrereglage = $isPrereglage;

        return $this;
    }

    public function getNameReglage(): ?string
    {
        return $this->nameReglage;
    }

    public function setNameReglage(?string $nameReglage): void
    {
        $this->nameReglage = $nameReglage;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getIp(): ?string
    {
        return $this->ip;
    }

    public function setIp(string $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getPossibilityToSave(): ?bool
    {
        return $this->possibilityToSave;
    }

    public function setPossibilityToSave(?bool $possibilityToSave): self
    {
        $this->possibilityToSave = $possibilityToSave;

        return $this;
    }

    /**
     * @return Collection|SaveMeetcoinByUser[]
     */
    public function getSaveMeetcoinByUsers(): Collection
    {
        return $this->saveMeetcoinByUsers;
    }

    public function addSaveMeetcoinByUser(SaveMeetcoinByUser $saveMeetcoinByUser): self
    {
        if (!$this->saveMeetcoinByUsers->contains($saveMeetcoinByUser)) {
            $this->saveMeetcoinByUsers[] = $saveMeetcoinByUser;
            $saveMeetcoinByUser->setMessage($this);
        }

        return $this;
    }

    public function removeSaveMeetcoinByUser(SaveMeetcoinByUser $saveMeetcoinByUser): self
    {
        if ($this->saveMeetcoinByUsers->removeElement($saveMeetcoinByUser)) {
            // set the owning side to null (unless already changed)
            if ($saveMeetcoinByUser->getMessage() === $this) {
                $saveMeetcoinByUser->setMessage(null);
            }
        }

        return $this;
    }

    public function getScanned(): ?bool
    {
        return $this->scanned;
    }

    public function setScanned(?bool $scanned): self
    {
        $this->scanned = $scanned;

        return $this;
    }
}
