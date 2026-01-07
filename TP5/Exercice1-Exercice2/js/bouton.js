// Récupération du bouton
let mybutton = document.getElementById("myBtn");

// Détection du scroll
window.addEventListener("scroll", function () {
  changeBackgroundColor();
});

// Changement de la couleur de fond selon le scroll
function changeBackgroundColor() {
  let scrollPosition = window.scrollY;
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  let redValue = Math.min(255, Math.floor((scrollPosition / maxScroll) * 255));

  document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
}

// Scroll vers le haut (compatible Edge)
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Événement clic sur le bouton
mybutton.addEventListener("click", topFunction);




/* code récupérer via https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

code original

let mybutton = document.getElementById("myBtn");

II)// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

III)// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 partie II retiré*/ 
