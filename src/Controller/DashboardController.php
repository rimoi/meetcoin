<?php

namespace App\Controller;

use App\Form\UploadFileResetType;
use App\Service\ResetUrl;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/lucien", name="dashboard_")
 */
class DashboardController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(Request $request, ResetUrl $resetUrl): Response
    {
        $form = $this->createForm(UploadFileResetType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->getData()['file'];
            if ('xlsx' !== $file->getClientOriginalExtension()) {
                $this->addFlash('danger', 'Uniquement les fichiers autorisés');
            }

            $spreadsheet = IOFactory::load($file);
            $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
            $idToRemove = [];
            foreach ($sheetData as $sheet) {
                if (($sheet['A'] ?? false) && trim($sheet['A'])) {
                    $idToRemove[] = (int) $sheet['A'];
                }
            }

            $error = $resetUrl->reset($idToRemove);

            if (!$error) {
                $this->addFlash('danger', "Les ids uploader soit ils ne sont pas trouver en base ou le fichier ne le contiennent pas !");
            } elseif ($idToRemove) {
                $this->addFlash('success', 'Vos url '. implode(', ', $idToRemove) .' ont bien été supprimé');
            } else {
                $this->addFlash('danger', "Il n'y a pas des ids trouvés dans ce fichier");
            }

            return $this->redirectToRoute('dashboard_index');
        }

        return $this->render('dashboard/index.html.twig', ['form' => $form->createView()]);
    }
}
