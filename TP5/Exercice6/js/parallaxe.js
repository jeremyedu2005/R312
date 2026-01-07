
window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;  
    let parallaxSection = document.querySelector(".parallax");  
    
    // Calcul de la nouvelle position de l'arrière-plan (on ajuste la vitesse)
    let backgroundPosition = scrollPosition * 0.5;  

    
    parallaxSection.style.backgroundPosition = "center " + backgroundPosition + "px";
});
