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
const buttonsForm = document.querySelectorAll('.read-more-btn_Form');
const textElements = document.querySelectorAll('.pres');
const textElementsForm = document.querySelectorAll('.presForm');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {const textElement = textElements[index];
    textElement.classList.toggle('showText');
    ScrollReveal().reveal('.pres', {delay: 100});});
  });

  buttonsForm.forEach((buttonForm, index) => {
    buttonForm.addEventListener('click', () => {const textElementForm = textElementsForm[index];
      textElementForm.classList.toggle('showTextForm');
      ScrollReveal().reveal('.presForm', {delay: 100});});
  });