import { Carta, partida } from "./modelo";

const puntos = document.querySelector(".puntuacion") as HTMLElement;
const botonCarta = document.getElementById("pedir-carta") as HTMLButtonElement;
const botonPlantarse = document.getElementById(
  "me-planto"
) as HTMLButtonElement;
const mensajePlantarse = document.getElementById(
  "mensaje-me-planto"
) as HTMLElement;
const gameOver = document.getElementById("game-over") as HTMLElement;
const imagen = document.querySelector("img") as HTMLImageElement;
const botonNuevaPartida = document.getElementById(
  "nueva-partida"
) as HTMLButtonElement;
const botonResultado = document.getElementById(
  "saber-resultado"
) as HTMLButtonElement;

const muestraPuntuacion = () => {
  puntos.innerHTML = partida.puntuacion.toString();
};
muestraPuntuacion();

const actualizarPuntuacion = (carta: number) => {
  if (carta >= 1 && carta <= 7) {
    partida.puntuacion = partida.puntuacion + carta;
  } else {
    partida.puntuacion = partida.puntuacion + 0.5;
  }
  muestraPuntuacion();
};

const pedirCarta = () => {
  let carta: Carta = (Math.floor(Math.random() * 10) + 1) as Carta;
  if (carta > 7) {
    carta = (carta + 2) as Carta;
  }

  muestraCarta(carta);
  actualizarPuntuacion(carta);

  if (partida.puntuacion > 7.5) {
    botonCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonNuevaPartida.disabled = false;
    botonResultado.disabled = false;
    gameOver.innerHTML = "GAME OVER!!!!!!!";
  }

  if (partida.puntuacion === 7.5) {
    botonCarta.disabled = true;
    botonPlantarse.disabled = true;
    botonNuevaPartida.disabled = false;
    gameOver.innerHTML = "HAS GANADO 🥳🥳🥳🥳🥳";
  }
  botonResultado.disabled = true;
};

const muestraCarta = (carta: Carta): void => {
  switch (carta) {
    case 1:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      imagen.alt = "AS DE COPAS";
      break;
    case 2:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      imagen.alt = "DOS DE COPAS";
      break;
    case 3:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      imagen.alt = "TRES DE COPAS";
      break;
    case 4:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      imagen.alt = "CUATRO DE COPAS";
      break;
    case 5:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      imagen.alt = "CINCO DE COPAS";
      break;
    case 6:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      imagen.alt = "SEIS DE COPAS";
      break;
    case 7:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      imagen.alt = "SIETE DE COPAS";
      break;
    case 10:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      imagen.alt = "SOTA DE COPAS";
      break;
    case 11:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      imagen.alt = "CABALLO DE COPAS";
      break;
    case 12:
      imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      imagen.alt = "REY DE COPAS";
      break;
  }
};

const plantarse = () => {
  botonCarta.disabled = true;
  botonPlantarse.disabled = true;
  botonResultado.disabled = false;
  botonNuevaPartida.disabled = false;

  switch (true) {
    case partida.puntuacion <= 4:
      mensajePlantarse.innerHTML = "Has sido muy conservador!";
      break;
    case partida.puntuacion > 4 && partida.puntuacion < 6:
      mensajePlantarse.innerHTML = "Te ha entrado el canguelo eh?";
      break;
    case partida.puntuacion >= 6 || partida.puntuacion <= 7:
      mensajePlantarse.innerHTML = "Casi casi...";
      break;
    case partida.puntuacion === 7.5:
      mensajePlantarse.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
    default:
      mensajePlantarse.innerHTML = "Ha habido un error con la puntuación";
      break;
  }
};

const reset = () => {
  partida.puntuacion = 0;
  muestraPuntuacion();
  botonCarta.disabled = false;
  botonPlantarse.disabled = false;
  botonResultado.disabled = true;
  gameOver.innerHTML = "";
  mensajePlantarse.innerHTML = "";

  imagen.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  imagen.alt = "carta boca abajo";
};

const saberResultado = () => {
  let mensaje = "La siguiente carta hubiese sido esta: ";
  let valorSiguienteCarta = Math.floor(Math.random() * 10) + 1;
  let nombreSiguienteCarta = valorSiguienteCarta;

  if (partida.puntuacion <= 7) {
    if (valorSiguienteCarta > 7) {
      nombreSiguienteCarta = valorSiguienteCarta + 2;
      valorSiguienteCarta = 0.5;
    }

    mensaje += `${nombreSiguienteCarta} de copas. `;
    partida.puntuacion += valorSiguienteCarta;
  }

  if (partida.puntuacion === 7.5) {
    botonResultado.disabled = true;
    mensaje += `Habrías ganado el juego. `;
  }

  if (partida.puntuacion > 7.5) {
    botonResultado.disabled = true;
    mensaje += `Ya habrías alcanzado una puntuación mayor que 7.5.`;
  } else {
    mensaje += `La puntuación final sería: ${partida.puntuacion.toFixed(1)}`;
  }

  alert(mensaje);
};

botonCarta.addEventListener("click", pedirCarta);
botonPlantarse.addEventListener("click", plantarse);
botonNuevaPartida.addEventListener("click", reset);
botonResultado.addEventListener("click", saberResultado);
