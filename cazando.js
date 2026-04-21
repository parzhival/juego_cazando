let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX = 220;
let gatoY = 230;
let comidaX = 460;
let comidaY = 460;
let puntaje = 0;
let tiempo = 15;
let velocidad;

const ALTO_GATO = 40;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 40;

function iniciarJuego(){
    clearInterval(velocidad);
    velocidad=setInterval(restarTiempo,1000);
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
    gatoX=gatoX-10;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
    detectarColision();
}
function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
    detectarColision();
}
function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
    detectarColision();
}
function detectarColision(){
    if(gatoX+ANCHO_GATO >= comidaX && 
        gatoX <= comidaX+ANCHO_COMIDA &&
        gatoY+ALTO_GATO >= comidaY &&
        gatoY <= comidaY+ALTO_COMIDA){
        aparecerComida();  
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje);
        tiempo = tiempo - 1;
    }
    if(puntaje==6){
        clearInterval(velocidad);
        alert("ganador")
    }
}
function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
    actualizarPantalla();
}
function restarTiempo(){
    tiempo = tiempo-1;
    mostrarEnSpan("tiempo",tiempo);
    if(tiempo==0){
        clearInterval(velocidad);
        alert("GAME OVER")
    }
}

function reiniciarJuego(){
    puntaje = 0;
    tiempo = 15;
    gatoX = 220;
    gatoY = 230;
    comidaX = 460;
    comidaY = 460;
    mostrarEnSpan("puntos",puntaje);
    mostrarEnSpan("tiempo",tiempo);
    actualizarPantalla();
    iniciarJuego();
    
}
    