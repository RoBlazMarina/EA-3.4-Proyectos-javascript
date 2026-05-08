//Enlazamos la constante con el elemento tablero del html

const tablero = document.getElementById('tablero');

//Creamos un buvle para añadir las casillas (const). Como es un cuadrado 8x8, hacemos uno por filas y dentro otro por columnas, de manera
//que al crear la primera fila, se creen las 8 columnas (el contador lo llevan las variables filas y columnas respectivamente)
// proceso que se repite cuando se crea la siguiente fila hasta que se crean las 8. Como empieza desde 0, el contador se detiene en cuanto alcanza 8.
for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
        const casilla = document.createElement('div');  //Crea la casilla
        casilla.classList.add('casilla');   //La casilla es añadida a la lista de casillas

    // Ahora, para los colores alternos. La lógica se resume en el resto entre 2 de la suma de filas y columnas. Si es par, la casilla es blanca y se añade
    //  a la lista correspondiente, si es impar será negra.(Esto se irá decidiendo conforme se vayan creando.)
    if ((fila + col) % 2 === 0) {
        casilla.classList.add('blanca');
    } else {
        casilla.classList.add('negra');
    }


    // Como queremos añadir las piezas de ajedrez en su estado inicial, todavía dentro del bucle, iremos añadiéndolas conforme se creen.
    let pieza = ''; //En la base, pondremos que es un elemento vacío que se irá rellenando según los siguientes condicionantes.

    // Filas 0 y 1: negras | Filas 6 y 7: blancas

    // Iniciamos con los peones que se encuentran en la fila 1 (recordamos que partimos y contamos la 0)
    if (fila === 1) {
      pieza = '♟'; // peón negro
    } else if (fila === 6) {    //Añadimos los peones de la fila 6
      pieza = '♙'; // peón blanco
    } else if (fila === 0 || fila === 7) {  //Para el resto de piezas de las filas 0 y 7, anidaremos otra lista de if para que se tenga en cuenta la columna.
      // Piezas mayores
        const esBlanca = (fila === 7);  //Usamos este boleano para diferenciar entre las piezas blancas y las negras y limitar el número de else if

      // Según la columna, decidimos la pieza
    if (col === 0 || col === 7) {

        //Esto consiste en una condición entre A (condición verdadera) y B (condición falsa)
        pieza = esBlanca ? '♖' : '♜'; // torres
    } else if (col === 1 || col === 6) {
        pieza = esBlanca ? '♘' : '♞'; // caballos
    } else if (col === 2 || col === 5) {
        pieza = esBlanca ? '♗' : '♝'; // alfiles
    } else if (col === 3) {
        pieza = esBlanca ? '♕' : '♛'; // dama
    } else if (col === 4) {
        pieza = esBlanca ? '♔' : '♚'; // rey
    }
    }

    // Si la pieza no está vacía, se añade al div
    if (pieza !== '') {
        casilla.textContent = pieza;
    }
    //Se añade al elemento tablero como un todo
    tablero.appendChild(casilla);
    }
}
//BUsca el bottón en el html para ingresar en el otro juego
const botonJuego = document.getElementById('btn-juego');
    //Cuando hace click se cambia a la página del minijuego.
botonJuego.addEventListener('click', () => {
    window.location.href = 'juego.html';
});


