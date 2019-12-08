# Une feuille de style complète
Les pages commencent à avoir du style, mais on peut faire mieux. Voici les dernières règles à ajouter pour terminer la mise en forme du site.

## Pour la page d'index
Voici le travail à faire par sélecteur. N'hésitez à les ajouter s'il n'existe pas encore dans votre CSS.

### H1
Pour un titre un peu plus lisible, il faut espacer les lettres, le passer en gras et en majuscule. Voici les régles à ajouter au sélecteur :

    h1{
      letter-spacing: 0.1em;
      font-size: 2em;
      font-weight: bold;
      text-transform: uppercase;
    }

* __letter-spacing__ : pour l'espace entre les lettres,
* __font-weight__ : _bold_ pour passer en gras,
* __text-transform__ : avec la valeur _uppercase_ le titre sera toujours en majuscule.

### LI
Les liens seraient bien mieux sans les puces. Pour les enlever, ajoutez la ligne suivante dans le sélecteur __LI__ :

    list-style-type: none;
    
Il ne reste plus qu'à ajouter un __margin__ de _1em_ pour aérer un peu cette partie de la page. Ca vous savez désormais le faire.

### A
La police par défaut ne met pas assez en avant les liens. Il faudrait les avoir en gras et dans une police plus grande. _2em_ par exemple. A vous de jouer.

Pour épurer un peu, nous allons enlever la ligne de soulignement grâce à la règle suivante :

    text-decoration: none;

## Pour la page du jeu du pendu

## classe aTrouver
Pour les __INPUTS__, repérés grâce à la classe _aTrouver_, il nous faudrez des champs un peux moins resserrer  (grâce au __margin__) et un texte centré.

## button
Il faut rajouter le sélecteur, et les règles qui vont avec, pour avoir des boutons qui ont pour style :
* _#00000000_ en couleur de bordure,
* _#f9674d_ en couleur de fond,
* _#ffffff_ en couleur d'écriture,
* _1.1em_ en taille de police,
* _0.2em_ en espacement de lettre,
* _1em_ en margin,
* du gras,
* le texte en majuscule.

Le site est terminé, du moins pour la présentation. Il faut maintenant coder la logique du jeu à l'[étape 5]().
