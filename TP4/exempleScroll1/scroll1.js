// Ajout d'un gestionnaire d'événement pour l'événement de défilement (scroll) sur l'objet `document`
document.addEventListener("scroll", scrollWindow, false);
// Cela signifie que chaque fois que l'utilisateur fait défiler la page, la fonction `scrollWindow` sera exécutée.

document.querySelector("p").addEventListener("scroll", scrollP, false);
// Ajoute un gestionnaire d'événement pour l'événement de défilement sur l'élément `p` (un paragraphe) de la page.
// Chaque fois que l'utilisateur fait défiler ce paragraphe, la fonction `scrollP` sera exécutée.

// Fonction appelée à chaque fois que l'utilisateur fait défiler la page ou le document
function scrollWindow(evt) {
    // Déclare une variable texte qui contiendra les informations à afficher dans un format HTML
    let texte = "Le document<br />";
    
    // Ajoute des informations sur le défilement de la fenêtre dans la variable `texte`
    texte += "scrollX : " + window.scrollX + "<br />";
    // `scrollX` : position actuelle du défilement horizontal de la fenêtre (en pixels)
    
    texte += "scrollY : " + window.scrollY + "<br />";
    // `scrollY` : position actuelle du défilement vertical de la fenêtre (en pixels)
    
    texte += "pageXOffset : " + window.pageXOffset + "<br />";
    // `pageXOffset` : distance du défilement horizontal depuis le bord gauche du document.
    
    texte += "pageYOffset : " + window.pageYOffset + "<br />";
    // `pageYOffset` : distance du défilement vertical depuis le haut du document.
    
    texte += "document.documentElement.scrollLeft : " + document.documentElement.scrollLeft + "<br />";
    // `scrollLeft` : distance du défilement horizontal du document au niveau de l'élément `document.documentElement` (l'élément `<html>`).
    
    texte += "document.documentElement.scrollTop : " + document.documentElement.scrollTop + "<br />";
    // `scrollTop` : distance du défilement vertical du document au niveau de l'élément `document.documentElement` (l'élément `<html>`).
    
    texte += "document.documentElement.scrollWidth : " + document.documentElement.scrollWidth + "<br />";
    // `scrollWidth` : largeur totale du document, y compris les zones qui sont défilées (toutes les colonnes).
    
    texte += "document.documentElement.scrollHeight : " + document.documentElement.scrollHeight + "<br />";
    // `scrollHeight` : hauteur totale du document, y compris les zones qui sont défilées (en cas de contenu dépassant la taille visible).
    
    texte += "document.documentElement.clientWidth : " + document.documentElement.clientWidth + "<br />";
    // `clientWidth` : largeur visible de l'élément `document.documentElement` (l'élément `<html>`) sans les barres de défilement.
    
    texte += "document.documentElement.clientHeight : " + document.documentElement.clientHeight + "<br />";
    // `clientHeight` : hauteur visible de l'élément `document.documentElement` (l'élément `<html>`) sans les barres de défilement.
    
    texte += "window.innerWidth : " + window.innerWidth + "<br />";
    // `innerWidth` : largeur intérieure de la fenêtre du navigateur (visible), incluant la barre de défilement verticale si elle est présente.
    
    texte += "window.innerHeight : " + window.innerHeight + "<br />";
    // `innerHeight` : hauteur intérieure de la fenêtre du navigateur (visible), incluant la barre de défilement horizontale si elle est présente.
    
    // Affiche les informations collectées dans un élément HTML ayant l'ID "afficheWindow"
    document.querySelector("#afficheWindow").innerHTML = texte;
}

// Fonction appelée chaque fois que l'utilisateur fait défiler le paragraphe
function scrollP(evt) {
    // Sélectionne le premier paragraphe dans le document
    const p = document.querySelector("p");
    
    // Déclare une variable texte pour contenir les informations sur le défilement du paragraphe
    let texte = "Le paragraphe<br />";
    
    // Ajoute des informations sur le défilement du paragraphe dans la variable `texte`
    texte += "element.scrollLeft : " + p.scrollLeft + "<br />";
    // `scrollLeft` : position du défilement horizontal à l'intérieur du paragraphe.
    
    texte += "element.scrollTop : " + p.scrollTop + "<br />";
    // `scrollTop` : position du défilement vertical à l'intérieur du paragraphe.
    
    texte += "element.scrollWidth : " + p.scrollWidth + "<br />";
    // `scrollWidth` : largeur totale du contenu du paragraphe, y compris les parties non visibles (celles qui sont défilées).
    
    texte += "element.scrollHeight : " + p.scrollHeight + "<br />";
    // `scrollHeight` : hauteur totale du contenu du paragraphe, y compris les parties non visibles (celles qui sont défilées).
    
    texte += "element.clientWidth : " + p.clientWidth + "<br />";
    // `clientWidth` : largeur visible du paragraphe, c'est-à-dire sans les zones défilées ni les bordures.
    
    texte += "element.clientHeight : " + p.clientHeight + "<br />";
    // `clientHeight` : hauteur visible du paragraphe, c'est-à-dire sans les zones défilées ni les bordures.
    
    // Affiche les informations collectées dans un élément HTML ayant l'ID "afficheP"
    document.querySelector("#afficheP").innerHTML = texte;
}
