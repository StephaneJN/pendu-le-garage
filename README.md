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

### Le SEO

Pour continuer le projet, téléchargez tout le projet.

## Structurer une page
Ouvrez le fichier index.html. vous constatez qu'il y a de nouvelles balise :
    
    <div id="page">
        <div id="entete">

        </div>

        <div id="menu">

        </div>

        <div id="pied_de_page">

        </div>
    </div>
    
Ces balises n'ont aucun effet sur la page, comme vous pouvez le constater en ouvrant la page dans un navigateur. Elle est vide. On traite toujours les pages web en bloc, ce qui va beaucoup nous aider pour le css et le responsive.

Le document étant structuré, nous pouvons passer au contenu

## Contenu d'une page web
En HTML, il existe de nombreuses balise pour ajouter du contenu à votre page.
Vous pouvez toutes les retrouver sur [MDN](https://developer.mozilla.org/fr/docs/Web/HTML), une très bonne documentation en ligne.
