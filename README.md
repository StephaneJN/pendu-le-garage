# Découverte du HTML
le HTML contient la structure et le contenu de la page web. C'est un langage à balise et normalisé, c'est à dire que vous aller devoir utiliser des noms de balises prédéfini pour construire votre page. Vous ne pouvez pas inventer vos propres balises. Pour commencer, il faut respecter l'architecture suivante :

    <!DOCTYPE html>
    <html lang="fr">
      <head>
      
      </head>
      <body>
      
      </body>
     </html>

* __HEAD__ : contient des informations pour le navigateur,
* __BODY__ : contient les données à afficher dans le navigateur.

Aucune balise ne peut être écrite en dehors de ces deux conteneurs.

Lors du développement d'un projet web, vous devez garder 2 choses en tête :

### Le responsive
![responsive](ressources/responsive.png)

### Le SEO
![seo](https://www.seoh.fr/wp-content/uploads/2018/02/Infographie-466x656.jpg)

Pour continuer le projet, téléchargez tout le projet.

## Structurer une page
Ouvrez le fichier _index.html_. vous constatez qu'il y a de nouvelles balises :
    
    <div id="page">
        <div id="entete">

        </div>

        <div id="menu">

        </div>

        <div id="pied_de_page">

        </div>
    </div>
    
Ces balises n'ont aucun effet sur l'apparence de la page, comme vous pouvez le constater en ouvrant la page dans un navigateur. Elle est vide. On traite toujours les pages web en bloc, ce qui va beaucoup nous aider pour le css et le responsive.

Notez que chaque __DIV__ contient un __id__. C'est un paramètre qui prend une valeur grâce à l'opérateur __=__. Le but de l'__id__ est pouvoir identifier une __DIV__. Vous êtes libre de donner le nom que vous voulez. 

Le document étant structuré, nous pouvons passer au contenu.

## Contenu d'une page web
En HTML, il existe de nombreuses balises pour ajouter du contenu à votre page.
Vous pouvez toutes les retrouver sur [MDN](https://developer.mozilla.org/fr/docs/Web/HTML), une très bonne documentation en ligne.

### Les titres
Les titres sont repérés par des balises H qui vont de __H1__ à __H6__.

Ajoutez la balise suivante dans la __DIV__ _entete_ :

    <h1>Le Pendu par le Garage</h1>

Ajoutez la balise __H3__ dans la __DIV__ _pied_de_page_ :

    <h3>Réalisé par </h3>
    
### Le texte
Il existe différents formats de textes. le plus utilisé est le paragraphe :

    <p>Choisir le niveau </p>
    
Ce paragraphe prend place dans la __DIV__ _menu_. Ajoutez le paragraphe suivant en-dessous le titre __H3__ :

    <p>Le Garage</p>
    
Il est aussi possible de créer des listes à puces :

        <ul>
            <li>niveau facile</li>
            <li>niveau difficile</li>        
        </ul>
        
Cette liste prend place dans la __DIV__ _menu_. 
* __UL__ : indique une liste à puce. A noter que vous pouvez utiliser __OL__.
* __LI__ : pour une ligne de liste.

### Lien hypertexte
Le lien hypertexte est l'un des principes fondamentaux du web. Simple à mettre en place, cette balise ouvre une nouvelle page web lorsque l'utilisateur clique dessus. Cela est possible grâce à une URL, une adresse utilisée sur le web.

Modifions notre _index.html_ pour ajouter un lien vers la page _pendu.html_. Reprenez la la première ligne de la liste à puces, et ajoutez la balise __A__ comme suit :

    <li><a href="pendu.html?niveau=6">niveau 1</a></li>
    
* __A__ : balise pour de lien hypertexte. 
* __href__ : paramètre pour définir l'URL de la page à atteindre.
* __"pendu.html"__ : URL de la page à atteindre.
*__?niveau=6"__ : passe un paramètre à la page à atteindre.
* __niveau 1__ : lien apparaissant sur la page web.

Si vous avez bien compris le principe, modifiez la deuxième ligne pour atteindre la page _pendu.html_ en passant le paramètre __niveau=7__.

Maintenant que la première page est terminée vous pouvez passer à l'[étape 2](https://github.com/JaminNormand/pendu-le-garage/tree/step-2)
