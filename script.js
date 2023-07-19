function toggleMenu() {
    var menuItems = document.querySelector(".headerPrincipal-nav");
    if (menuItems.style.display == "none"){
        menuItems.style.display = "flex";
      }else{
        menuItems.style.display = "none";
      }
  }


ScrollReveal().reveal('.container');

const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.pres');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {const textElement = textElements[index];
    textElement.classList.toggle('showText');
    ScrollReveal().reveal('.pres', {delay: 100});});
  });