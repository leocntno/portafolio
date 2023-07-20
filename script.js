function toggleMenu() {
    var menuItems = document.querySelector(".headerPrincipal-nav");
    if (menuItems.style.display == "none"){
        menuItems.style.display = "flex";
      }else{
        menuItems.style.display = "none";
      }
  }

document.querySelector(".contenedorCertificados").addEventListener("click",function(){
  document.querySelector(".contenedorCertificados ul").classList.toggle("show");
})


document.querySelector(".contenedorProyecto").addEventListener("click",function(){
  document.querySelector(".contenedorProyecto h2").classList.toggle("show");
})