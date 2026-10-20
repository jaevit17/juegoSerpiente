
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    //tamaño celda
    const TAMANIO_CELDA=25;
    //intervalo
    let intervaloSerpiente;
    //direccion
    let direccionActual='abajo';
    //puntaje
    let puntaje;    
    //arreglo
    const serpiente=[
      //Cabeza serpiente
      {x:8,y:9},
      //Cuerpo serpiente
      {x:8,y:8},
      {x:8,y:7},
      {x:9,y:7},
      {x:10,y:7},
      {x:11,y:7},
      {x:12,y:7},
      {x:12,y:8},
      {x:12,y:9},
      {x:12,y:10},
      {x:12,y:11},
      {x:13,y:11},
      {x:14,y:11},
      {x:14,y:12},
      {x:14,y:13}
    ];
    //Posicion de comida
    let comidaX;
    let comidaY;

//---------------------------------------------------------
    // Primera pintura del juego al cargar la página
    puntaje=0;
    generarComida();
    dibujarTodo();

//FUNCIONES DE DIBUJO--------------------------------------
    //Limpia Canva
    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    //Dibuja Todo
    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
      pintarComida();
      pintarSerpiente();
    }
    //Dibuja Tablero
    function dibujarTablero(){
      ctx.strokeStyle="#838080";
      ctx.lineWidth=1;
      //---Lineas verticales
      for(let x=0;x<=canvas.width;x+=TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
        ctx.stroke();
      }
      //---Lineas horizontales
      for(let y=0;y<=canvas.height;y+=TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
      }
    }
    //Pinta cuadrados con posicion x y
    function pintarParte(lineaX,lineaY){
      let posicnX=lineaX*TAMANIO_CELDA;
      let posicnY=lineaY*TAMANIO_CELDA;
      ctx.fillRect(posicnX,posicnY,TAMANIO_CELDA,TAMANIO_CELDA);
      ctx.strokeStyle="#fffffff1";
      ctx.strokeRect(posicnX,posicnY,TAMANIO_CELDA,TAMANIO_CELDA);
    }
    //Pinta Serpiente
    function pintarSerpiente(){
      for(let i=0;i<serpiente.length;i++){
        if(i==0){
          ctx.fillStyle="#08dbc6";
        }else{
          ctx.fillStyle="#2abe5e"
        }
        pintarParte(serpiente[i].x,serpiente[i].y);
      }
    }

//FUNCIONES DE MOVIMIENTO--------------------------------------
//Mover a la derecha
  function moverDerecha() {
  let cabeza = serpiente[0];
  let nuevaCabeza={
    x:cabeza.x+1,
    y:cabeza.y
  }
  serpiente.unshift(nuevaCabeza);
  }
//Mover a la izquierda
  function moverIzquierda(){
    let cabeza=serpiente[0];
    let nuevaCabeza={
      x:cabeza.x-1,
      y:cabeza.y
    }
    serpiente.unshift(nuevaCabeza);
  }
//Mover arriba
  function moverArriba(){
    let cabeza=serpiente[0];
    let nuevaCabeza={
      x:cabeza.x,
      y:cabeza.y-1
    }
    serpiente.unshift(nuevaCabeza);
  }
//Mover abajo
  function moverAbajo(){
    let cabeza=serpiente[0];
    let nuevaCabeza={
      x:cabeza.x,
      y:cabeza.y+1
    }
    serpiente.unshift(nuevaCabeza);
  }
  //Guarda la direccion
  function cambiarDireccion(direccion){
    direccionActual=direccion;
  }
  //Inicar juego
    function iniciarJuego(){
      if(intervaloSerpiente!=null){
        return;
      }
      intervaloSerpiente=setInterval(moverSerpiente,250);
    } 
  //Pausar juego
    function pausarJuego(){
      clearInterval(intervaloSerpiente);
      intervaloSerpiente=null;
    }
  //Mover Serpiente
    function moverSerpiente(){
      switch(direccionActual){
        case "derecha":
          moverDerecha();
          break;
        case "izquierda":
          moverIzquierda();
          break;
        case "abajo":
          moverAbajo();
          break;
        case "arriba":
          moverArriba();
          break;
      }
      if(atraparComida()==true){
        let cmpPuntaje=document.getElementById("puntaje");
        puntaje=Number(cmpPuntaje.textContent);
        puntaje=puntaje+1;
        cmpPuntaje.textContent=puntaje;
        generarComida();
      }else{
        serpiente.pop();
      }
        dibujarTodo();
    }
//FUNCIONES COMIDA--------------------------------------
//Pintar comida
  function generarComida(){
    comidaX=Math.floor(Math.random()*(canvas.width/TAMANIO_CELDA));
    comidaY=Math.floor(Math.random()*(canvas.height/TAMANIO_CELDA));
  }
  function pintarComida(){
    ctx.fillStyle="#c9e20e";
    pintarParte(comidaX,comidaY);
  }
//Atrapa comida
  function atraparComida(){
  if (serpiente[0].x == comidaX &&
      serpiente[0].y == comidaY) {
  return true;
  }
  return false;
}
