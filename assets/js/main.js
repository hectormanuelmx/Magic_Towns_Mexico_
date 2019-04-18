  //Obtener los elementos de la clase .close

  let links = document.querySelectorAll(".close");

  //recorrerlos

  links.forEach(function(link){

  // Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    //Quitarle clases de animacion al content
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //Aregar nuevas clases para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
        location.href ="/boletines";
    },600);



    return false;
  })
});
