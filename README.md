# Premier Code JavaScript

Il ne reste plus qu'un mécanisme à coder : les niveaux de difficultés.

## Les tableaux
Pour le moment, c'est toujours le même mot qui est proposé au joueur. Pour rendre le jeu plus intéressant, nous allons travailler sur une liste de mots. Le code pourra ainsi tirer un mot au hasard, dans cette liste.

Commencez par modifier la variable __mots__ comme proposé ici :

    var mots=["garage", "hacker", "bifide", "bonsai", "cheval"]
    
 Nous avons vu qu'une variable sert à stocker une valeur. Grâce aux crochets, la variable peut stocker une liste de valeur. Pour retrouver l'une des valeurs il faut passer par un indice, comme par exemple :
 * __mots[0]__ : retourne "garage",
 * __mots[3]__ : retourne "bonsai",
 * __mots[i]__ : il est possible d'utiliser une variable pour représenter l'indice.
 
 Il reste à demander au programme de tirer un mot au hasard dans cette liste. Pour ça, remplaçons __solution = mots__, dans l'évènement __jeu.addEventListener("click", function(){__ par les lignes suivantes :

    jeu.addEventListener("click", function(){
        var max = mots.length
        var indice = Math.floor(Math.random() * max)
        solution = mots[indice]
* __mots.length__ : donne le nombre d'élément de la liste __mots__,
* __Math.random()__ : tire de façon aléatoire, un nombre en 0 et 1,
* __* max__ : il faut donc le multiplier par notre nombre de mots,
* __Math.floor__: et arrondir la valeur à l'entier le plus proche.

## Gérer les niveaux
La fonction déclarée __getNiveau()__ retourne le niveau choisi par le joueur en lisant la variable dans l'url. Les deux valeurs possibles sont :
* __6__ : pour le niveau facile, où il faut trouver un mot de 6 lettres.
* __7__ : pour le niveau difficile, où il faut trouver un mot de 7 lettres.

Dans un premier temps, il faut donc utiliser la fonction pour connaitre le niveau de jeu, en passant par une variable par exemple :

    var niveau = getNiveau()

Ensuite, il faut donc afficher, dans _pendu.html_ autant de champs de saisie qu'il y a de lettres à trouver.Pour cacher, vous pouvez utiliser le code suivant :

    document.getElementById("lettre6").hidden = true

Enfin, il faut modifier la liste des mots si le niveau de jeu est à 7. Voici un exemple de liste :

        mots = ["absolue","butanol","cabotin","gabarie","piccolo"]
        
Attention, à bien attribuer la victoire au bout de 6 lettres trouvées, pour un niveau facile, et 7 lettres trouvées pour un niveau difficile. Le code qui gère la victoire est celui-ci pour le moment :

            if (bravo == 6)
            {
                gagner(inputs, solution)
            }

En suivant toutes ces recommandations, modifier le code de _pendu.js_ pour gérer les niveaux de jeu.

Vous trouverez le projet complet dans la dernière étape de ce projet.

    
