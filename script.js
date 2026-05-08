const tablero = document.getElementById('tablero');

for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
        const casilla = document.createElement('div');
        casilla.classList.add('casilla');

    // Colores alternos
    if ((fila + col) % 2 === 0) {
        casilla.classList.add('blanca');
    } else {
        casilla.classList.add('negra');
    }

    // BONUS: piezas
    let pieza = '';

    // Filas 0 y 1: negras | Filas 6 y 7: blancas
    // Peones
    if (fila === 1) {
      pieza = '♟'; // peón negro
    } else if (fila === 6) {
      pieza = '♙'; // peón blanco
    } else if (fila === 0 || fila === 7) {
      // Piezas mayores
        const esBlanca = (fila === 7);

      // Según la columna, decidimos la pieza
    if (col === 0 || col === 7) {
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

    // Si hay pieza, la ponemos como texto
    if (pieza !== '') {
        casilla.textContent = pieza;
    }

    tablero.appendChild(casilla);
    }
}

const botonJuego = document.getElementById('btn-juego');

botonJuego.addEventListener('click', () => {
  // Cambia 'juego.html' por el nombre real de tu archivo del Proyecto 2
    window.location.href = 'juego.html';
});


