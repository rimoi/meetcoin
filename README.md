# Projet Lucien

## Pré-requis
- Symfony
- Mysql
- PHP
- Composer
- Nodejs et Yarn

Récuperation de projet :

```shell
git clone git@github.com:luciengerber/projet_webapp.git # Cloner le projet
git checkout master # switcher sur la branche ou il ya du code
```

## Installation du projet

```shell
composer install # Installation du dépendance côté PHP
yarn install  # Installation du dépendance côté Assets (js, css, image)
```

## Démarrage du serveur

```shell
symfony serve:start -d
```


### Dernière Note


---  dernière note 17 /02
- prio (gérer mes meetcoins)
    - Quand la meuf enregistre le meetcoin et elle ne peut pas le modifier mais quand le prioritaire modifi le meetcoin, elle recoit une notif
    - il se connecte on redirige si il veux le prereglage
    - gérer un meetcoin (sachant qu'il a  du credit )
    - tant que la personne (prio) ne pas reinitinialiser par la fille ou le gars tt les actions qu'il va faire elle seront visible sur cette meetcoin
    - si la fille reinitialise le meetcoin sans avoir enregistrer --> on niveau du mec il ne pas plu pouvoir faire de modification sur son meetcoin (grisé, meetcoin digital ne plus phiisque )
      on créer un copie pour juste le visualisation en l'instant T mais ne plus liée à l'url et ne voit plus le nouveau modif
      il peux (prio) supprimé et masqué

- meuf enregister elle voit les modifs mais la fille ne peux pas le modifier
- si la fille elle reinitialiser la meetcoin la fille elle reprends comme prio de meetcoin et on créer un clone de l'ancien message meetcoin
- à la fois une copie dans l'ancien meetcoin avec ces commentaires on laisse l'ancien copie dans meetcoin recu et on reprends de nouveau départ pour cette meetcoin comme elle appartient à elle



