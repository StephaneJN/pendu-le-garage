# Découverte du css
Le CSS permet d'appliquer un style à une balise html. Vous trouverez dans le répertoire _/public_ le fichier _pendu.css_ qui contient le code suivant :

  body{
      background-color: #7a4c81;
  }

  #entete{
      border:2px solid #302535;
  }

  .aTrouver{
      font-size: 2.5em;
  }

Le CSS s'écrit toujours de la même façon : un sélécteur suivit des règles de style. Les sélecteurs sont de 3 types, comme dans notre exemple :
* __body__ : en appelant directement la balise sur laquelle il faut appliquer le style.
* __#entete__ : en appelant l'__id__ de la balise sur laquelle il faut appliquer le style.
* __.aTrouver__ : en appelant la __class__ des balises sur les qulles il faut appliquer le style.

Les règles de styles sont entre accolades et se terminent toutes par un point-virgule. Elle permettent de modifier :
* La forme de la balise (coins arrondis, largeur, hauteur..)
* La position de la balise (en haut, au centre, alignée..)
* La mise en forme de la balise (couleur, bordure, police..)

## Appliquer une feuille de style à une page web
Pour appliquer une feuille de style à une page web, il suffit d'ajouter cette ligne de code dans l'entête HTML :

  <link rel="stylesheet" href="./public/pendu.css">

Faites le pour les deux fichier html du projet et observé ce que cela donne.

## Police
Pour changer la police d'une page web, il faut :
* tout d'abord charger la police voulu, en ajoutant, dans l'entête, une balise de ce type :

  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

*faire appelle à la police dans le style, en ajoutant, la règle suivante, pour le body par exemple :

  font-family: "Open Sans",Arial,sans-serif;

Dans cette exemple, la police _Open Sans_ est chargée à partir du site [Google Fonts](https://fonts.google.com) et appliquée au __BODY__ grâce à la règle __font-family__. Par héritage, _Open Sans_ devient la police de toutes les balises de la page. Si jamais, cette font ne peut être chargée, il faut alors appliqué _Arial_, et ainsi de suite avec toutes les polices déclarées dans __font-family__.
