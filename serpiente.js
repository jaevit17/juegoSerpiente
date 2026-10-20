
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");

    const TAMANIO_CELDA=25;
    let posicionX=0;

    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO
    // =========================


    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
      pintarParte(5,5);
      pintarParte(10,2);
      pintarParte(1,21);
      pintarParte(21,4);
      pintarParte(0,4);
      pintarParte(21,21)
    }

    function dibujarTablero(){
      ctx.strokeStyle="#838080";
      ctx.lineWidth=1;
      //Lineas verticales
      for(let x=0;x<=canvas.width;x+=TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
        ctx.stroke();
      }
      //Lineas horizontales
      for(let y=0;y<=canvas.height;y+=TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
      }
    }

    function pintarParte(lineaX,lineaY){
      let posicnX=lineaX*TAMANIO_CELDA;
      let posicnY=lineaY*TAMANIO_CELDA;
      ctx.fillStyle="#ee0606e0";
      ctx.fillRect(posicnX,posicnY,TAMANIO_CELDA,TAMANIO_CELDA);
      ctx.strokeStyle="#fffffff1";
      ctx.strokeRect(posicnX,posicnY,TAMANIO_CELDA,TAMANIO_CELDA);
    }
