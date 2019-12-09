# Premier Code JavaScript

Il ne reste plus qu'un mécanisme à coder : les niveaux de difficultés.

# Les tableaux
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


