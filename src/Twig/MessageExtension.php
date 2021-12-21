<?php

namespace App\Twig;

use App\Entity\Message;
use App\Entity\Url;
use App\Repository\UrlRepository;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class MessageExtension extends AbstractExtension
{
    /**
     * @var UrlRepository
     */
    private $urlRepository;

    public function __construct(UrlRepository $urlRepository)
    {
        $this->urlRepository = $urlRepository;
    }

    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('traduction', [$this, 'traduction']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('function_name', [$this, 'doSomething']),
        ];
    }

    public function traduction(Url $url, string $locale)
    {
        /** @var Message $message */
        $message = $url->getMessages()->last();
        if ($message) {
            if ($message->getLanguage() === $locale) {
                return $message->getMessage();
            }
            return (new GoogleTranslate())->setSource($message->getlanguage())->setTarget($locale)->translate($message->getMessage());
        }

        throw new \Exception('Template not found ! ');
    }
}
