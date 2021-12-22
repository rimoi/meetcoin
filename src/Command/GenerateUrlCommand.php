<?php

namespace App\Command;

use App\Constant\PaymentConstant;
use App\Entity\Url;
use App\Service\GenerateUrl;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class GenerateUrlCommand extends Command
{
    protected static $defaultName = 'app:generate-url';
    protected static $defaultDescription = 'Géneration des urls sur demande';
    /**
     * @var GenerateUrl
     */
    private $generateUrl;


    public function __construct(string $name = null, GenerateUrl $generateUrl)
    {
        parent::__construct($name);
        $this->generateUrl = $generateUrl;
    }

    protected function configure(): void
    {
        $this
            ->setDescription(self::$defaultDescription)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->generateUrl->generate(PaymentConstant::UNLIMITED, 50000, 'MBC2');

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return 0;
    }
}
