<?php
declare(strict_types=1);
namespace App\Service;

use App\Entity\Payment;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class StripePayment
{
    /**
     * @var string
     */
    private $secretKey;

    public function __construct(string $secretKey)
    {
        $this->secretKey = $secretKey;
    }

    public function paymentIntent(float $amount = 1.0)
    {
        Stripe::setApiKey($this->secretKey);

        return PaymentIntent::create([
            'amount' => $amount * 100,
            'currency' => Payment::DEVISE,
            'payment_method_types' => ['card']
        ]);
    }
}
