
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
    }

    function dibujarTablero(){
      ctx.strokeStyle="#070707";
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
      //Ejemplo de Prueba
      /*ctx.strokeStyle="#d61111";
      ctx.beginPath();
      ctx.moveTo(25,0);
      ctx.lineTo(25,canvas.height);
      ctx.stroke();

      ctx.strokeStyle="rgb(238, 132, 10)";
      ctx.beginPath();
      ctx.moveTo(50,0);
      ctx.lineTo(50,canvas.height);
      ctx.stroke();

      ctx.strokeStyle="#d21313f0";
      ctx.beginPath();
      ctx.moveTo(75,0);
      ctx.lineTo(75,canvas.height);
      ctx.stroke();

      ctx.strokeStyle="#d213acf0";
      ctx.beginPath();
      ctx.moveTo(100,0);
      ctx.lineTo(100,canvas.height);
      ctx.stroke();*/
    }
