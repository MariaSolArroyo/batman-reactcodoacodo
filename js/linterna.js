// capturar elementos de HTML
// capturo sonido
// primer manera
// let sonidoBatman = document.getElementsByClassName("bati_encendido")

let sonidoBatman = document.querySelector(".bati_encendido")
let sonidoBoton = document.querySelector(".bati_click")


// capturo Imagen

let batman = document.querySelector(".batman")
let batmanBoton = document.querySelector(".bati_boton")

let estadoLinterna = "apagado"


// evento
batmanBoton.addEventListener("click", controlarLinterna)

// funciones
function controlarLinterna(){

    if (estadoLinterna == "apagado"){

        estadoLinterna = "encendido"
        sonidolinterna()
        // EFECTO DE SONIDO
        batman.classList.add("batman_activo")
    }else{
        estadoLinterna = "apagado"
        sonidolinterna()
        batman.classList.remove("batman_activo")

    }

}

function sonidolinterna(){

    if (sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();
    }else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime = 0;

    }

}