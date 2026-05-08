const personaje = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const puntos = document.getElementById('puntos');
const gameover = document.getElementById('gameover');

let vivo = true;
let contador = 0;

// SALTO
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !personaje.classList.contains('salto')) {
    personaje.classList.add('salto');

    setTimeout(() => {
      personaje.classList.remove('salto');
    }, 600);
  }
});

// COLISIÓN (versión integrada y mejorada)
const loop = setInterval(() => {
  if (!vivo) return;

  const personajeRect = personaje.getBoundingClientRect();
  const obstaculoRect = obstaculo.getBoundingClientRect();

  const choque =
    personajeRect.right > obstaculoRect.left &&
    personajeRect.left < obstaculoRect.right &&
    personajeRect.bottom > obstaculoRect.top &&
    personajeRect.top < obstaculoRect.bottom;

  if (choque) {
    vivo = false;
    gameover.style.display = 'block';
    obstaculo.style.animation = 'none';
  }
}, 10);

// PUNTOS
setInterval(() => {
  if (vivo) {
    contador++;
    puntos.textContent = contador;
  }
}, 1000);

// BOTÓN REINICIAR
document.getElementById('btn-reiniciar').addEventListener('click', () => {
  location.reload();
});

// BOTÓN VOLVER AL INICIO
document.getElementById('btn-volver').addEventListener('click', () => {
  window.location.href = 'index.html'; // Cambia si tu archivo principal tiene otro nombre
});
