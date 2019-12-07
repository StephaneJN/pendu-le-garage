# Première page HTML
Maintenant que vous avez découvert le HTML, vous allez pouvoir créer la page _pendu.html_. Vous allez voir qu'elle est structuré un peu comme la page _index.html_ :

    <body><div id="page">
        <div id="entete">
        </div>

        <div id="air_de_jeu">
        </div>

        <div id="visu">
        </div>

        <div id="reponse">
        </div>
    </div></body>

## Entete
Ajoutez dans la __DIV__ _entete_ le même titre __H1__ que dans _index.html_.
En-dessous, ajoutez un paragraphe qui contient un lien qui ramène vers la page _index.html_.

## Air_de_jeu
Cette partie contient des champs de saisies pour que le joueur puisse saisir le mot recherché lettre par lettre. Cela se fait avec la balise __input__. Voici les deux premiers champs :

    <input type="text" id="lettre0" class="aTrouver" size="1"/>
    <input type="text" id="lettre1" class="aTrouver" size="1"/>
                
La balise compte 4 attributs :
* __type__  : _text_ indique que la saisie sera du texte.
* __id__ : comme pour les __DIV__, les __INPUT__ peuvent être identifiés.
* __class__ : comme __id__, vous pouvez ajouter des __class__ sur des balises. Elles servent, après, pour le _CSS_ ou le _JS_.
* __size__ : taille du champs en nombre de caractères.

Pour finir cette partie, ajoutez suffisament d'__INPUT__ pour en avoir 7. Les __id__ font de _lettre0_ à _lettre6_. 

Pour voir d'autres types d'__INPUT__ : [MDN]

Enfin, il nous faut un bouton pour lancer le jeu. Pour ça, ajoutez, en-dessous les __INPUT__, le __BUTTON__ suivant :

    <button id="jeu">Nouveau Jeu</button>

## Visu
Cette __DIV__ affiche l'image du pendu. Pour ajouter une image, utilisez la balise __IMG__, comme décrit dans la documentation [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img).

Le chemin de l'image, s'écrit, dans notre projet, _./publics/pendu00.png_.

## Reponse
Ajoutez dans un cette __DIV__ un bouton _Voir la solution_ avec un __id__ _fin_.
Enfin, ajoutez une balise de paragraphe, sans texte, avec un __id__ _message_.

La page _pendu.html_ est terminée, mais elle n'est pas très belle. La prochaine [étape](https://github.com/JaminNormand/pendu-le-garage/tree/step-3) du projet consiste à embellir les pages web grâce au _css_.

