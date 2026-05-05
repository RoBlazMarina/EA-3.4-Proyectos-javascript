// script.js
const tablero = document.getElementById('tablero'); // Con esta constante buscamos el elemento id=tablero

for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
        const casilla = document.createElement('div');
        casilla.classList.add('casilla');

    // Lógica de color:
    // Si fila + col es par → un color, si es impar → el otro
        if ((fila + col) % 2 === 0) {
            casilla.classList.add('blanca');
        } else {
            casilla.classList.add('negra');
    }

        tablero.appendChild(casilla);
    }
}
