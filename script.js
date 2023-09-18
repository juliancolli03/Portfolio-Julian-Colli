



//FunciÃ³n que me aplica el estilo a la opciÃ²n seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}
 function fasedesarrollo(){
     alert ("Proyecto en desarrollo")
}
// //funciÃ³n que muestra el menu responsive
// function responsiveMenu() {
//     var x = document.getElementById("nav");
//     if (x.className === "") {
//         x.className = "responsive";
//     } else {
//         x.className = "";
//     }
// }

//detecto el scrolling para aplicar la animaciÃ³n del la barra de habilidades
// window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animaciÃ³n de la barra de habilidades
// function efectoHabilidades() {
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if (distancia_skills >= 300) {
//         document.getElementById("html").classList.add("barra-progreso1");
//         document.getElementById("js").classList.add("barra-progreso2");
//         document.getElementById("bd").classList.add("barra-progreso3");
//         document.getElementById("ps").classList.add("barra-progreso4");
//     }

// }
function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;
    
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const currentDate = `${dayOfWeek}`;
  
    timeElement.textContent = currentTime;
    dateElement.textContent = currentDate;
  }
  
  // Actualizar la hora cada segundo
//  setInterval(updateClock, 1000);
  
  // Actualizar la hora al cargar la página
 // updateClock();
  
// efecto circulo
// rompe responsive
// const circulo = document.querySelector("#circulo")
// document.addEventListener("mousemove", e =>{
// const mouseX = e.pageX - 30
// const mouseY = e.pageY - 30
// circulo.style = `transform: translate3d(${mouseX}px, ${mouseY}px,0)`})