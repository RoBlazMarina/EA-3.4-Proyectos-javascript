
//Creamos las constantes y las enlazamos con los elementos del html
const personaje = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const puntos = document.getElementById('puntos');
const gameover = document.getElementById('gameover');

//Creamos los valores vivo y contador y le asignamos valores según lo que necesitamos
let vivo = true;    //Un booleano
let contador = 0;   //Un int

// SALTO
document.addEventListener('keydown', (e) => {   //Marca un evento que inicia con cualquier tecla con 'keydown'
  if (e.code === 'Space' && !personaje.classList.contains('salto')) {   //Evita encadenar saltos
    personaje.classList.add('salto');   //Activa la animación de css de salto

    setTimeout(() => {
      personaje.classList.remove('salto');  //Quita la clase para que el personaje vuelva al suelo
    }, 600);    //Espera el tiempo de la animación
  }
});

// COLISIÓN 
const loop = setInterval(() => {    //Abajo completa con 10, que se traduce a 10ms, es decir 100 veces por segundo
  if (!vivo) return;    //Si vivo es falso se acaba el juego con el return

  const personajeRect = personaje.getBoundingClientRect();  //Guarda los elementos para compararlos
  const obstaculoRect = obstaculo.getBoundingClientRect();

  const choque =    //Aquí está la detención de la colisión que la detecta cuando:
    personajeRect.right > obstaculoRect.left && //Se solapa con el lado izquierdo
    personajeRect.left < obstaculoRect.right && //Se solapa con el lado derecho
    personajeRect.bottom > obstaculoRect.top && //Si se solapa por arriba
    personajeRect.top < obstaculoRect.bottom;   //Si se solapa por debajo

  if (choque) { //En caso de que choque
    vivo = false;   //Vivo se vuelve falso y se termina el juego
    gameover.style.display = 'block';   //Muestra el mensaje de derrota
    obstaculo.style.animation = 'none'; //Se detiene la animación
  }
}, 10);

// PUNTOS
setInterval(() => { //El intervalo está calculado para que sea a cada segundo, el tiempo estimado del bucle
  if (vivo) {   //Solo cuenta mientras está vivo
    contador++;
    puntos.textContent = contador;
  }
}, 1000);

// BOTÓN REINICIAR
document.getElementById('btn-reiniciar').addEventListener('click', () => {  //Busca el botón reiniciar y le añade el evento de clicar donde se reinicia
  location.reload();    //Recarga la página y vivo se vuelve true
});

// BOTÓN VOLVER AL INICIO
document.getElementById('btn-volver').addEventListener('click', () => { //BUsca el botón para volver al inicio y añade el evento de clicar.
  window.location.href = 'index.html'; // Cambia si tu archivo principal tiene otro nombre  //Cuando clica, enlaza y redirige a la página de inicio
});
