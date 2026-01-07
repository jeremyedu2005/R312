// Ajout des gestionnaires d'événements pour différents éléments de la page
document.querySelector("#scroll").addEventListener("click", scrollCallBack, false);
// Lorsque l'élément avec l'ID "scroll" est cliqué, la fonction `scrollCallBack` est appelée.
document.querySelector("#scrollTo").addEventListener("click", scrollToCallBack, false);
// Lorsque l'élément avec l'ID "scrollTo" est cliqué, la fonction `scrollToCallBack` est appelée.
document.querySelector("#scrollBy").addEventListener("click", scrollByCallBack, false);
// Lorsque l'élément avec l'ID "scrollBy" est cliqué, la fonction `scrollByCallBack` est appelée.

// Gestionnaires d'événements pour des fonctionnalités non standard
document.querySelector("#scrollByLines").addEventListener("click", scrollByLinesCallBack, false);
// Lorsque l'élément avec l'ID "scrollByLines" est cliqué, la fonction `scrollByLinesCallBack` est appelée.
document.querySelector("#scrollByPages").addEventListener("click", scrollByPagesCallBack, false);
// Lorsque l'élément avec l'ID "scrollByPages" est cliqué, la fonction `scrollByPagesCallBack` est appelée.

// Gestionnaires d'événements pour les éléments qui sont eux-mêmes scrollables
document.querySelector("#scrollElt").addEventListener("click", scrollEltCallBack, false);
// Lorsque l'élément avec l'ID "scrollElt" est cliqué, la fonction `scrollEltCallBack` est appelée.
document.querySelector("#scrollToElt").addEventListener("click", scrollToEltCallBack, false);
// Lorsque l'élément avec l'ID "scrollToElt" est cliqué, la fonction `scrollToEltCallBack` est appelée.
document.querySelector("#scrollByElt").addEventListener("click", scrollByEltCallBack, false);
// Lorsque l'élément avec l'ID "scrollByElt" est cliqué, la fonction `scrollByEltCallBack` est appelée.
document.querySelector("#scrollTopElt").addEventListener("click", scrollTopEltCallBack, false);
// Lorsque l'élément avec l'ID "scrollTopElt" est cliqué, la fonction `scrollTopEltCallBack` est appelée.

// Définition des fonctions de rappel (callbacks) pour chaque événement de clic

function scrollCallBack(){
    window.scroll(0, 1000);
    // Fait défiler la fenêtre principale (l'ensemble de la page) à la position (0, 1000).
    // Le premier argument est pour la position horizontale (0 = aucune position horizontale), 
    // le deuxième argument est pour la position verticale (1000px).
}

function scrollToCallBack(){
    window.scrollTo({
        left: 0,
        top: 100,
        behavior: "smooth"
    });
    // Fait défiler la page à la position (0, 100) avec un comportement de défilement "lisse" (smooth).
    // "left" et "top" définissent les coordonnées du défilement et "behavior: 'smooth'" fait défiler avec une animation fluide.
}

function scrollByCallBack(){
    window.scrollBy(0, 300);
    // Fait défiler la page de 300px vers le bas (sur l'axe vertical).
    // L'argument '0' indique qu'il n'y a pas de défilement horizontal.
}

// Fonctions pour les méthodes de défilement non standard

function scrollByLinesCallBack(){
    window.scrollByLines(5);
    // Défilement de 5 lignes vers le bas.
    // Cette méthode est non standard et n'est pas supportée par tous les navigateurs.
}

function scrollByPagesCallBack(){
    window.scrollByPages(1);
    // Défilement d'une page complète vers le bas.
    // Comme `scrollByLines`, cette méthode n'est pas standard.
}

// Fonctions pour gérer le défilement d'éléments spécifiques qui sont eux-mêmes scrollables

function scrollEltCallBack(){
    document.querySelector("#scrollable").scroll(0, 800);
    // Sélectionne un élément avec l'ID "scrollable" et fait défiler cet élément de 800px vers le bas.
    // L'élément "scrollable" doit être un conteneur avec une zone de défilement.
}

function scrollToEltCallBack(){
    document.querySelector("#scrollable").scrollTo({
        left: 0,
        top: 100,
        behavior: "smooth"
    });
    // Fait défiler l'élément "scrollable" jusqu'à la position (0, 100) de manière fluide.
}

function scrollByEltCallBack(){
    document.querySelector("#scrollable").scrollBy(0, 300);
    // Fait défiler l'élément "scrollable" de 300px vers le bas.
}

function scrollTopEltCallBack(){
    document.querySelector("#scrollable").scrollTop += 100;
    // Modifie la position de défilement de l'élément "scrollable" en ajoutant 100px à sa position de défilement verticale.
    // Le défilement est effectué directement sur la propriété `scrollTop` de l'élément.
    // La ligne suivante est commentée, mais elle aurait également fonctionné si on utilisait `document.documentElement.scrollTop` pour faire défiler toute la page.
    // document.documentElement.scrollTop += 100;
}
