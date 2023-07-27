document.querySelector(".contenedorCertificados").addEventListener("click",function(){
  document.querySelector(".contenedorCertificados ul").classList.toggle("show");
})


document.querySelector(".contenedorProyecto").addEventListener("click",function(){
  document.querySelector(".contenedorProyecto h2").classList.toggle("show");
})


document.querySelector(".contenedorProyectoDos").addEventListener("click",function(){
  document.querySelector(".contenedorProyectoDos h2").classList.toggle("show");
})


const toggleBtn = document.getElementsByClassName('btnHeader');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('visible');
  menu.classList.toggle('hidden');
});