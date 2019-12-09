# Découverte du JavaScript
Le JavaScript est utilisé pour rendre dynamique une page web. A l'heure actuelle, dans notre jeu, lorsqu'un bouton est cliqué ou un champ rempli, il ne se passe rien. Le code qui va être ajouté va permettre de mettre à jour la page suivant ces évènements. C'est ce qu'on appelle du code évènementiel.

Vous trouverez, comme d'habitude, une docymentation détaillée sur [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide).

## structure du JavaSript
Le JavaScript repose sur 3 principes :
* _les variables_ : qui mémorisent les informations utiles au programme. Le mot à trouver, par exemple.
* _Les fonctions_ : reconnaissable à leurs (), qui déclenche des actions sur la page web. Commencer la partie, par exemple.
* _Les mots clés_ : des mots qui structure le code et qui ont une fonction précise. le mot __var__, sert par exemple à déclarer une variable et le mot __function__, une fonction.

## Utiliser JavaScript
Ajoutez la ligne suivante à la fin du __BODY__ de la page _pendu.html_ :

    <script src="./public/pendu.js"></script>

Comme pour le CSS, il faut dire à la page web où se trouve le code JS que l'on veut utiliser.

## Les variables
Elles sont donc déclarée par le mot __var__ suivi d'un nom, laissé à l'appréciation du développeur. Il est possible de leurs attribuer une valeur grâce au symbole _=_. 

Ces valeurs peuvent être :
* _du numérique_ : en mettant tout simple un nombre après le __=__,
* _du texte_ : en mettant le texte entre guillemets,
* _un booléen_ : c'est une variable qui ne peut être que vraie ou fausse. on utilise alors les mots clés __true__ ou __false__.

Voici, par exemple, deux variables dont on a besoin dans le code :

    /* déclaration des variables */
    var solution = "Demandez un nouveau jeu"
    var etape = 0

A noter que la ligne qui commence par __/*__ et se termine par __*/__ n'est pas du code, mais un simple texte appellé commentaire.

Pour voir si vous avec bien compris le principe :
* ajoutez une variable _bravo_ avec une valeur de _0_,
* et une variable _mots_ avec pour valeur _"garage"_.

## Les fonctions
Il existe deux types de fonctions :
* _les fonctions natives_ : celles qui existent déjà dans JavaScript et qu'il suffit d'appeler,
* _les fonctions déclarées_ : celles que vous devez coder vous-même.

Voici un petit exemple à ajouter dans le code :

    /* logique de jeu */
    alert(getNiveau())

* __alert()__ : est une fonction native qui prend en parramètre un message à afficher.
* __getNiveau()__ : est une fonction déclarées un peu plus haut dans le fichier et qui retourne le niveau choisi par l'internaute.

Vous pouvez donc retrouver le code de __getNiveau()__ dans le fichier _pendu.js_ :

    //fonction pour récupérer le niveau de difficulté
    function getNiveau(){
        var params = new URLSearchParams(document.location.search.substring(1))
        var niveau = params.get("niveau")
        return niveau
    }
    
Une fonction est déclarée par le mot clé __function__ suivit d'un nom, au choix du développeur, de parenthèse et d'un bloc de code, délimité par des accolades. Ce dernier contient le code à déclencher lors de l'appel de la fonction.

Les parenthèses servent donc à passer des parramètres à la fonction, c'est-à-dire des valeurs à traiter par le code de la fonction. S'il n'y en a pas besoin, il faut laisser des parenthèses vides.

Comme dans l'exemple, il faut appeler la fonction pour que le code de cette dernière soit exécuté.

## Les balises HTML
Le JavaScript sert donc à dynamiser une page web, c'est à dire à mettre à jour celle-ci suivant les évènements qui surviennent.

Il faut donc que dans le code JS, les balises qui déclenchent les évènements et les balises à mettre à jour puissent être identifiées. Pour ça, il y a plusieurs façons de faire, dont voici les deux plus courantes :

    /* sélection des éléments de la page pour travailler avec */
    var airDeJeu = document.getElementById("air_de_jeu")
    var inputs = airDeJeu.getElementsByClassName("aTrouver")

* La première permet de retrouver une balise de la page HTML à partir de son __id__,
* la seconde permet de retrouver toutes les balises ayant la même __class__.

Les balises ainsi trouvées par le JavaScript sont stockées dans des variables pour pouvoir les utiliser dans le code.

Voyons si vous avez compris. Ajoutez les lignes de code pour trouver les balises suivantes :
* le bouton ayant pour __id__ _jeu_,
* le bouton ayant pour __id__ _fin_,
* le paragraphe ayant pour __id__ _message_,
* L'image ayant pour __id__ _pendu_.

Testez rapidement votre code, avec a ligne suivante :

    /* logique de jeu */
    alert(jeu.innerHTML)

__innerHTML__ est une propriété qui retourne le contenu de la balise se trouvant avant le point.

## Un peu de code
Donc, pour le moment, le JavaScript c'est des fonctions et des variables. Vous allez pouvoir commencer à coder le jeu en faissant appel à la fonction __desactiver()__, déclarée dans le fichier _pendu.js :

    //fonction pour activer ou desactiver les champs de saisie
    function desactiver(nodes, ok){
        var couleur = "#ffffff"

        if(ok)
        {
            couleur = "#302535"
        }

        var style = "background-color: " + couleur

        for (var i = 0; i < nodes.length; i++) {
            nodes[i].value = ""
            nodes[i].setAttribute("style", style)
            nodes[i].disabled = ok
        }
    }

Elle prend en paramètre 2 valeurs : 
* __nodes__ : la liste des balises à activer ou désactiver,
* __ok__ : booléen à vrai pour désactiver les balises ou à faux pour les activer.

Cette fonction fait appel à deux mots clés particuliers :
* __if__ : qui est une condition. Si la condition n'est pas vrai alors une partie du code n'est pas exécutée.
* __for__ : qui est une boucle, qui répète plusieurs fois un morceau de code.

Pour faire appel à cette fonction, écrivez la ligne suivante :

    /* logique de jeu */
    desactiver(inputs, true)

* __inputs__ est la liste des balises  ayant la __class__ _aTrouver_,
* __true__ est tout simplement la valeur booléen _vrai_.

Vous pouvez vérifier l'effet de cette ligne de code sur votre page web.

Ajoutez cette ligne de code à la suite :

    message.innerHTML = solution
    
Grâce à la propriété __innerHTML__ le paragraphe ayant l'__id__ _message_ affiche la valeur de la variable __solution__.

## Les évènements
Maintenant, il faut pouvoir démarrer le jeu lorsque l'utilisateur clique sur le bouton _"nouveau jeu"_.

Lorsqu'il fait ça, il déclenche un évènement. Celui-ci peut, à son tour, déclencher du code JavaScript à condition qu'il soit sur écoute.

    //Click sur le bouton 'nouveau jeu'
    jeu.addEventListener("click", function(){
        solution = mots

        desactiver(inputs, false)
        pendu.src = "./public/pendu00.png"
        message.innerHTML = ""
        message.setAttribute("style", "color: #302535")
        bravo = 0
        etape = 0
    })
    
* __jeu__: balise à écouter, ici le bouton _'nouveau jeu'_,
* __addEventListener__: fonction de mise sur écoute,
* __"click"__: nom de l'évènement à écouter, ici le clique,
* __function(){}__: fonction qui contient le code à déclencher lorsque l'évènement survient.


## Pour quelques lignes de code en plus
Maintenant, vous avez tous les éléments pour coder le jeu, ou presque, car vous ne connaissez pas encore le fonctionne du __for__ et du __if__.

### for
    //saisie dans un champs texte
    for (var i = 0; i < inputs.length; i++) {
        //todo..
    } 

Le __for__ va répéter le code __//todo__ autant de fois qu'il lui faut pour compter de __0__ à __inputs.lenght__
* __i = 0__ : valeur de départ de la boucle,
* __i<inputs.length__ : condition d'arrêt de la boucle,
* __inputs.length__: nombre d'élément dans la liste __inputs__,
* __i++__: pas d'incrémentation, ici de 1 en 1,
* __//todo__: ce commentaire symbolise le code à répéter.

### if
    if(saisie == lettre)
    {
        //todo si vrai..
    }else{
        //todo si faux..
    }

Le __if__ ne va exécuter le __//todo si vrai__ que si la condition est vraie. Si elle est fausse, c'est le code __//todo si faux__ qui est exécuté.
* __saisie == lettre__ : condition à tester, ici la variable __saisie__ doit être égale à la variable __lettre__
* __//todo si vrai__ : commentaire qui représente le code à exécuter si la condition est _vraie_,
* __else__ : mot clé pour indique où débute la partie du code _sinon_,
* __//todo si faux__ : commentaire qui représente le code à exécuter si la condition est _fausse_.


Ces derniers éléments doivent nous permettre de coder la logique du jeu, qui doit se déclencher dès qu'il y a une saisie dans un champ :

    //saisie dans un champs texte
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change",function(){
            var position = this.getAttribute("id").charAt(6)
            var saisie = this.value
            var lettre = solution.charAt(position)
        
            if(saisie.toLowerCase() == lettre.toLowerCase())
            {
                bravo++

                if (bravo == niveau)
                {
                    gagner(inputs, solution)
                }
            }else{
                etape++
                pendu.src = './public/pendu0'+etape+'.png'

                if(etape > 6){
                    perdre(inputs, solution)
                }
            }
        })
    }

## A vous de coder
En vous inspirant de la fonction __gagner()__ codez la fonction __perdre()__, sans paramètre, qui doit :
* désactiver les champs de saisie,
* afficher la solution dans le paragraphe _message_,
* afficher l'image _public/pendu07.png_,
* afficher le texte de _message_ dans la couleur #f9674d.

Puis ajoutez l'évènement _click_ sur le bouton d'__id__ _fin_. Le code de cet évènement appel la fonction __perdre()__.

Enfin, vous allez pouvoir coder les différents niveaux de jeu dans l'étape 6.



