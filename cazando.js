let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 40;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 40;

function graficarGato(){
    gatoX = canvas.height -280; 
    gatoY = canvas.width - 270 ;
    ctx.fillStyle = "#F2EEED"
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

 function graficarComida(){
    comidaX = canvas.height-20;
    comidaY = canvas.width - 20;  
    ctx.fillStyle = "#04f728"
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}