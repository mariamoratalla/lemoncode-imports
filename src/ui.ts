import { Carta, partida } from "./modelo";
import { actualizarPuntuacion, generarNumero } from "./motor";

export const elementosDOM = {
  puntos: document.querySelector(".puntuacion") as HTMLElement,
  botonCarta: document.getElementById("pedir-carta") as HTMLButtonElement,
  botonPlantarse: document.getElementById("me-planto") as HTMLButtonElement,
  mensajePlantarse: document.getElementById("mensaje-me-planto") as HTMLElement,
  gameOver: document.getElementById("game-over") as HTMLElement,
  imagen: document.querySelector("img") as HTMLImageElement,
  botonNuevaPartida: document.getElementById(
    "nueva-partida"
  ) as HTMLButtonElement,
  botonResultado: document.getElementById(
    "saber-resultado"
  ) as HTMLButtonElement,
};

export const muestraPuntuacion = () => {
  elementosDOM.puntos.innerHTML = partida.puntuacion.toString();
};

export const pedirCarta = () => {
  let carta: Carta = generarNumero() as Carta;
  if (carta > 7) {
    carta = (carta + 2) as Carta;
  }

  muestraCarta(carta);
  actualizarPuntuacion(carta);

  if (partida.puntuacion > 7.5) {
    elementosDOM.botonCarta.disabled = true;
    elementosDOM.botonPlantarse.disabled = true;
    elementosDOM.botonNuevaPartida.disabled = false;
    elementosDOM.botonResultado.disabled = false;
    elementosDOM.gameOver.innerHTML = "GAME OVER!!!!!!!";
  }

  if (partida.puntuacion === 7.5) {
    elementosDOM.botonCarta.disabled = true;
    elementosDOM.botonPlantarse.disabled = true;
    elementosDOM.botonNuevaPartida.disabled = false;
    elementosDOM.gameOver.innerHTML = "HAS GANADO 🥳🥳🥳🥳🥳";
  }
  elementosDOM.botonResultado.disabled = true;
};

const muestraCarta = (carta: Carta): void => {
  switch (carta) {
    case 1:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      elementosDOM.imagen.alt = "AS DE COPAS";
      break;
    case 2:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      elementosDOM.imagen.alt = "DOS DE COPAS";
      break;
    case 3:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      elementosDOM.imagen.alt = "TRES DE COPAS";
      break;
    case 4:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      elementosDOM.imagen.alt = "CUATRO DE COPAS";
      break;
    case 5:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      elementosDOM.imagen.alt = "CINCO DE COPAS";
      break;
    case 6:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      elementosDOM.imagen.alt = "SEIS DE COPAS";
      break;
    case 7:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      elementosDOM.imagen.alt = "SIETE DE COPAS";
      break;
    case 10:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      elementosDOM.imagen.alt = "SOTA DE COPAS";
      break;
    case 11:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      elementosDOM.imagen.alt = "CABALLO DE COPAS";
      break;
    case 12:
      elementosDOM.imagen.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      elementosDOM.imagen.alt = "REY DE COPAS";
      break;
  }
};

export const plantarse = () => {
  elementosDOM.botonCarta.disabled = true;
  elementosDOM.botonPlantarse.disabled = true;
  elementosDOM.botonResultado.disabled = false;
  elementosDOM.botonNuevaPartida.disabled = false;

  switch (true) {
    case partida.puntuacion <= 4:
      elementosDOM.mensajePlantarse.innerHTML = "Has sido muy conservador!";
      break;
    case partida.puntuacion > 4 && partida.puntuacion < 6:
      elementosDOM.mensajePlantarse.innerHTML = "Te ha entrado el canguelo eh?";
      break;
    case partida.puntuacion >= 6 || partida.puntuacion <= 7:
      elementosDOM.mensajePlantarse.innerHTML = "Casi casi...";
      break;
    case partida.puntuacion === 7.5:
      elementosDOM.mensajePlantarse.innerHTML =
        "¡Lo has clavado! ¡Enhorabuena!";
    default:
      elementosDOM.mensajePlantarse.innerHTML =
        "Ha habido un error con la puntuación";
      break;
  }
};

export const reset = () => {
  partida.puntuacion = 0;
  muestraPuntuacion();
  elementosDOM.botonCarta.disabled = false;
  elementosDOM.botonPlantarse.disabled = false;
  elementosDOM.botonResultado.disabled = true;
  elementosDOM.gameOver.innerHTML = "";
  elementosDOM.mensajePlantarse.innerHTML = "";

  elementosDOM.imagen.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  elementosDOM.imagen.alt = "carta boca abajo";
};
