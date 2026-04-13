let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX = 220;
let gatoY = 230;
let comidaX = 480;
let comidaY = 480;

const ALTO_GATO = 40;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 40;

function iniciarJuego(){
    graficarGato();
    graficarComida();
}
function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color ;
    ctx.fillRect(x,y,ancho,alto);
}
function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#1bf93c")
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"#ec3609");
 }

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function actualizarPantalla(){
    limpiarCanva();
    graficarComida();
    graficarGato();
}
function moverIzquierda(){
    gatoX=gatoX-10
    actualizarPantalla();
}