/*FUNCION PARA AGREGAR DATOS DEL FORMULARIO*/ 

 function captura() {
    let nombre= document.getElementById("nombre").value;
    let mail= document.getElementById("mail").value;
    let asunto= document.getElementById("asunto").value;
    let mensaje= document.getElementById("mensaje").value;
    if(nombre==""){
        alert('ingrese el campo de nombre');
        document.getElementById("nombre").focus();
    }else if (mail==""){
        alert('ingrese el campo de mail')
        document.getElementById("mail").focus();
    }else if (asunto==""){
        alert('ingrese el campo de asunto')
        document.getElementById("asunto").focus();
    }else if (mensaje==""){
        alert('ingrese un texto')
        document.getElementById("mensaje").focus();
    }else {
        console.log(nombre);
        console.log(mail)
        console.log(asunto)
        console.log(mensaje)
        document.getElementById("nombre").value="";
        document.getElementById("mail").value="";
        document.getElementById("asunto").value="";
        document.getElementById("mensaje").value="";
        document.getElementById("nombre").focus();
    }
    
  }

  /*FUNCION PARA ELIMINAR DATOS DEL FORMULARIO*/ 

    function eliminar (){
        document.getElementById("nombre").value="";
        document.getElementById("mail").value="";
        document.getElementById("asunto").value="";
        document.getElementById("mensaje").value="";

    }

/*CAMBIAR COLORES DE LISTA DE FRUTAS*/ 


   function cambiar_color_out(celda){
      celda.style.backgroundColor="red"
   }
   function cambiar_color_over(celda){
    celda.style.backgroundColor="yellow"
 }
 
 /* FUNCION EFECTO ACORDEON TALLERES */

 let elementaAcordeonS = document.getElementsByClassName('acordeonStudio')
 for (let i = 0; i <elementaAcordeonS.length; i++){
    elementaAcordeonS[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display =="block"){
            panel.style.display = "none";
        }else{
            panel.style.display="block";
        }
    });
 }
