<?php

namespace App\Form;

use App\Entity\Message;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('prenom', TextType::class, [
                'attr' => [
                    'placeholder' => 'homepage.form.lastname',
                    'class' => 'cs-border-radius',
                ],
                'label' => false
            ])
            ->add('type', ChoiceType::class, [
                'choices' => array_combine($this->typeMessage(), $this->typeMessage()),
                'placeholder' => 'homepage.form.proposition',
                'required' => false,
                'label' => false,
                'attr' => [
                    'placeholder' => 'homepage.form.proposition'
                ]
            ])
            ->add('message', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'homepage.form.description',
                    'class' => 'cs-border-radius'
                ],
                'label' => false,
                'required' => false
            ])
            ->add('timeToShowMessage', ChoiceType::class, [
                'choices' => $this->getChoices(),
                'required' => false,
                'label' => 'homepage.form.show_message',
            ])
            ->add('insta', TextType::class, [
                'required' => false,
                'attr' => [
                    'placeholder' => 'Instagram',
                    'class' => 'cs-border-radius',
                ],
                'label' => ' '
            ])
            ->add('messenger', TextType::class, [
                'attr' => [
                    'placeholder' => 'Messenger',
                    'class' => 'cs-border-radius',
                ],
                'label' => ' ',
                'required' => false,
            ])
            ->add('snap', TextType::class, [
                'attr' => [
                    'placeholder' => 'Snapchat',
                    'class' => 'cs-border-radius',
                ],
                'label' => ' ',
                'required' => false,
            ])
            ->add('email', TextType::class, [
                'attr' => [
                    'placeholder' => 'Email',
                    'class' => 'cs-border-radius',
                ],
                'label' => ' ',
                'required' => false,
            ])
        ;

        if ($options['name_prereglage'] ?? false) {
            $builder->add('nameReglage', TextType::class, [
                'label' => false,
                'attr' => [
                    'class' => 'cs-border-radius my-3',
                    'placeholder' => 'homepage.form.fields.name_prereglage'
                ]
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Message::class,
            'name_prereglage' => false
        ]);
    }

    private function getChoices()
    {
        return [
            'homepage.form.zero_min' => '',
            'homepage.form.one_hours' => '+1 hours',
            'homepage.form.three_hours' => '+3 hours',
            'homepage.form.six_hours' => '+6 hours',
            'homepage.form.twelve_hours' => '+12 hours',
            'homepage.form.24_hours' => '+24 hours',
        ];
    }

    private function typeMessage()
    {
        return [
            'homepage.form.drink',
            'homepage.form.dinner',
            'homepage.form.cafe',
            'homepage.form.lunch',
            'homepage.form.nice_place',
            'homepage.form.know_each_other',
            'homepage.form.show_him_passion',
            'homepage.form.fun_event',
        ];
    }
}
