<?php

namespace App\Controller\Website;

use App\Entity\Url;
use App\Repository\UrlRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{
    /**
     * @Route({"fr": "/{key}", "en": "/en/{key}", "es": "/es/{key}", "it": "/it/{key}"}, name="meetcoin_app")
     * @Entity("url", expr="repository.findByKey(key)")
     */
    public function index(?string $key, Request $request, UrlRepository $urlRepository): Response
    {
        if (!$key) {
            throw $this->createNotFoundException();
        }

        $url = $urlRepository->findByKey($key);
        if (!$url) {
            throw $this->createNotFoundException();
        }

        return $this->redirectToRoute('message_index', [
            'key' => $url->getUrlToRoute(),
            '_locale' => $request->getLocale()
        ]);
    }
}
