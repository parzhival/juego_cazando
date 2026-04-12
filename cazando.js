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

// function graficarGato(){
//     gatoX = canvas.height -280; 
//     gatoY = canvas.width - 270 ;
//     ctx.fillStyle = "#ec3609"
//     ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
// }

//    function graficarComida(){
//     comidaX = canvas.height-20;
//     comidaY = canvas.width - 20;  
//     ctx.fillStyle = "#04f728"
//     ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
// }
function graficarComida(){
    graficarRectangulo(480,480,ANCHO_COMIDA,ALTO_COMIDA,"#1bf93c")
}

function graficarGato(){
    graficarRectangulo(220,230,ANCHO_GATO,ALTO_GATO,"#ec3609");
 }

function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color ;
    ctx.fillRect(x,y,ancho,alto);
}