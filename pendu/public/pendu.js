

//fonction pour récupérer le niveau de difficulté
function getNiveau(){
    var params = new URLSearchParams(document.location.search.substring(1))
    var niveau = params.get("niveau")
    return niveau
}

