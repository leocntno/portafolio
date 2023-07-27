//CODIGO BOTON MENU

const btnMenu = document.querySelector(".btnHeader")
const menu = document.querySelector(".headerBar nav")

  btnMenu.addEventListener('click', ()=>{
      menu.classList.toggle('show')
  });

//CODIGO INFORMACION DESPLEGABLE

document.querySelector(".contenedorCertificados").addEventListener("click",function(){
  document.querySelector(".contenedorCertificados ul").classList.toggle("show");
});

document.querySelector(".contenedorProyecto").addEventListener("click",function(){
  document.querySelector(".contenedorProyecto h2").classList.toggle("show");
});

document.querySelector(".contenedorProyectoDos").addEventListener("click",function(){
  document.querySelector(".contenedorProyectoDos h2").classList.toggle("show");
});