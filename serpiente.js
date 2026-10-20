
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");

    const TAMANIO_CELDA=25;
    

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
      ctx.strokeStyle="#d61111";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(100,100);
      ctx.stroke();

      ctx.strokeStyle="rgb(238, 132, 10)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(100,100);
      ctx.stroke();

      ctx.strokeStyle="#d21313f0";
      ctx.beginPath();
      ctx.moveTo(canvas.width,300);
      ctx.lineTo(100,100);
      ctx.stroke();

      ctx.strokeStyle="#d213acf0";
      ctx.beginPath();
      ctx.moveTo(canvas.width,0);
      ctx.lineTo(100,100);
      ctx.stroke();
    }



