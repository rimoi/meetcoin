<?php

namespace App\Controller;

use App\Repository\UrlRepository;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/lucien/export", name="export_") */
class ExportController extends AbstractController
{
    /** @Route("/", name="index") */
    public function index(Request $request, UrlRepository $urlRepository): Response
    {
        $form = $this->createFormBuilder()
            ->add('list', TextType::class, [
                'attr' => [
                    'placeholder' => '1-1000'
                ],
                'help' => 'Précisez les plages des lignes à exporter'
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $data = $form->getData()['list'];

            if (stristr($data, '-')) {
                $lignes = explode('-', $data);
                if (count($lignes) === 2) {
                    // Create new Spreadsheet object
                    $spreadsheet = new Spreadsheet();

                    // Set document properties
                    $spreadsheet->getProperties()->setCreator('Lucien Berger')
                        ->setLastModifiedBy('Lucien Berger')
                        ->setTitle('Export Url')
                        ->setSubject('Export Url')
                        ->setDescription("L'exportation à été réalisé depuis le backoffice.");

                    // Add some data
                    $spreadsheet->setActiveSheetIndex(0)
                        ->setCellValue('A3', 'Identifiant')
                        ->setCellValue('B3', 'Sous-domaine')
                        ->setCellValue('C3', 'Domaine')
                        ->setCellValue('D3', 'Extension')
                        ->setCellValue('E3', 'Type')
                        ->setCellValue('F3', "Date création")
                        ->setCellValue('G3', 'Key')
                        ->setCellValue('H3', 'Timer')
                        ->setCellValue('I3', 'Url complet')
                        ->setCellValue('J3', 'Sponsor');

                    $i = 4;
                    $urls = $urlRepository->findUrlByTranche($lignes);
                    foreach ($urls as $url) {
                        $spreadsheet->setActiveSheetIndex(0)
                            ->setCellValue('A'. $i, $url->getIdentifiant())
                            ->setCellValue('B'. $i, $url->getSubdomain())
                            ->setCellValue('C'. $i, $url->getDomain())
                            ->setCellValue('D'. $i, $url->getExtension())
                            ->setCellValue('E'. $i, $url->getType())
                            ->setCellValue('F'. $i, $url->getCreatedAt() ? $url->getCreatedAt()->format('d/m/Y à H:i') : null)
                            ->setCellValue('G'. $i, $url->getSecurityKey())
                            ->setCellValue('H'. $i, $url->getTimer())
                            ->setCellValue('I'. $i, $url->getCompleteUrl())
                            ->setCellValue('J'. $i, $url->getSponsor());

                        ++$i;
                    }

                    $spreadsheet->setActiveSheetIndex(0)
                        ->setCellValueByColumnAndRow('1', '1', 'Total : '.count($urls));

                    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                    header('Content-Disposition: attachment;filename="urls.xlsx"');
                    header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
                    header('Cache-Control: max-age=1');

//                    $response = $this->redirectToRoute("export_index");

                    $response = new StreamedResponse();
                    $response->setCallback(function () use ($spreadsheet) {
                        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
                        $writer->save('php://output');
                    });

                    return $response->send();
                } else {
                    $formError = new FormError("Vous avez placez beaucoup de tiret(-) ! <br> Exemple : 1-1 ou 1-999");
                    $form->get('list')->addError($formError);
                }
            } else {
                $formError = new FormError("Le format n'est correcte ! <br> Exemple : 1-1 ou 1-999");
                $form->get('list')->addError($formError);
            }
        }

        return $this->render('export/index.html.twig', ['form' => $form->createView()]);
    }
}
