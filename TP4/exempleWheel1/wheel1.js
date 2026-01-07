// Ajoute un écouteur d'événement sur l'élément "body" pour capter l'événement "wheel" (molette de la souris)
document.body.addEventListener("wheel", affichWheel, false);

// Ajoute un écouteur d'événement sur la fenêtre pour capter l'événement "scroll" (défilement de la page)
window.addEventListener("scroll", affichScroll, false);

// Fonction qui gère l'événement "wheel" (molette de la souris ou touchpad)
function affichWheel(evt) {
    // Crée une chaîne de texte contenant la valeur de "deltaX" (déplacement horizontal de la molette)
    let texte = "deltaX : " + evt.deltaX + "<br />";
    
    // Ajoute à la chaîne de texte la valeur de "deltaY" (déplacement vertical de la molette)
    texte += "deltaY : " + evt.deltaY + "<br />";
    
    // Ajoute à la chaîne de texte la valeur de "deltaZ" (déplacement en 3D de la molette)
    texte += "deltaZ : " + evt.deltaZ;
    
    // Modifie le contenu HTML de l'élément avec l'ID "affichWheel" pour afficher les valeurs des deltas
    document.querySelector("#affichWheel").innerHTML = texte;
}

// Fonction qui gère l'événement "scroll" (défilement de la page)
function affichScroll(evt) {
    // Affiche un message dans la console pour indiquer que l'événement de défilement a été déclenché
    console.log("scroll");
    
    // Crée une chaîne de texte contenant la position verticale actuelle du défilement de la fenêtre (scrollY)
    let texte = "scrollY : " + window.scrollY;
    
    // Modifie le contenu HTML de l'élément avec l'ID "affichScroll" pour afficher la position du défilement
    document.querySelector("#affichScroll").innerHTML = texte;
}
