<?php

namespace App\Twig;

use Symfony\Component\Intl\Locales;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class LanguageExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('name_locale', [$this, 'languageNameFilter']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('function_name', [$this, 'doSomething']),
        ];
    }

    public function languageNameFilter(string $languageCode, ?string $forceLocale = null): ?string
    {
        $locale = $languageCode;
        if ($forceLocale) {
            Locale::setDefault($forceLocale);

            $locale = $forceLocale;
        }

        try {
            return ucwords(Locales::getName($languageCode, $locale));
        } catch (Exception $e) {
            return null;
        }
    }
}
