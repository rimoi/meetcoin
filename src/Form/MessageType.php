<?php

namespace App\Form;

use App\Entity\Message;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('prenom', TextType::class, [
                'attr' => [
                    'placeholder' => 'homepage.form.firstname',
                    'class' => 'cs-border-radius',
                ],
                'label' => false
            ])
            ->add('type', ChoiceType::class, [
                'choices' => array_combine($this->typeMessage(), $this->typeMessageResponse()),
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
                'choice_value' => function ($value) {
                    return ucfirst($value);
                },
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
            ->add('gender', ChoiceType::class, [
                'choices' => $this->getGender(),
                'required' => false,
                'choice_value' => function ($value) {
                    return ucfirst($value);
                },
                'placeholder' => 'homepage.gender.label',
                'constraints' => [
                    new NotBlank()
                ]
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
        ];
    }

    private function getGender()
    {
        return [
//            'homepage.gender.label' => 'homepage.gender.label',
            'homepage.gender.man' => 'homepage.gender.man',
            'homepage.gender.woman' => 'homepage.gender.woman',
            'homepage.gender.no-binary' => 'homepage.gender.no-binary',
        ];
    }

    private function typeMessage()
    {
        return [
            'homepage.form.drink',
            'homepage.form.cafe',
            'homepage.form.nice_place',
            'homepage.form.know_each_other',
        ];
    }
    private function typeMessageResponse()
    {
        return [
            'homepage.form.drink_reponse',
            'homepage.form.cafe_reponse',
            'homepage.form.nice_place_reponse',
            'homepage.form.know_each_other_reponse',
        ];
    }
}
