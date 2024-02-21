import { Carta, partida } from "./modelo";
import {
  actualizarPuntuacion,
  finalizarPartidaEstado,
  nuevaPartidaLogica,
  pedirCarta,
  siguienteCarta,
} from "./motor";

const puntos = document.querySelector(".puntuacion") as HTMLElement;
export const botonCarta = document.getElementById(
  "pedir-carta"
) as HTMLButtonElement;
export const botonPlantarse = document.getElementById(
  "me-planto"
) as HTMLButtonElement;
const mensajePlantarse = document.getElementById(
  "mensaje-me-planto"
) as HTMLElement;
const mensajeRestultado = document.getElementById(
  "mensaje-resultado"
) as HTMLElement;
const imagen = document.querySelector("img") as HTMLImageElement;
export const botonNuevaPartida = document.getElementById(
  "nueva-partida"
) as HTMLButtonElement;
export const botonResultado = document.getElementById(
  "saber-resultado"
) as HTMLButtonElement;

function muestraPuntuacion() {
  puntos.innerHTML = partida.puntuacion.toString();
}

function habilitarBoton(boton: HTMLButtonElement) {
  if (boton && boton instanceof HTMLButtonElement) {
    boton.disabled = false;
  }
}

function deshabilitarBoton(boton: HTMLButtonElement) {
  if (boton && boton instanceof HTMLButtonElement) {
    boton.disabled = true;
  }
}

function mostrarCarta(carta: Carta): void {
  if (imagen && imagen instanceof HTMLImageElement) {
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
      default:
        imagen.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        imagen.alt = "carta boca abajo";
        break;
    }
  }
}

function finalizarPartida(puntuacion: number, mensaje: string) {
  if (
    (puntuacion > 7.5 || puntuacion === 7.5) &&
    mensajeRestultado instanceof HTMLElement
  ) {
    mensajeRestultado.innerHTML = mensaje;
    finalizarPartidaEstado();
    deshabilitarBoton(botonCarta);
    deshabilitarBoton(botonPlantarse);
    habilitarBoton(botonNuevaPartida);
  }
}

export function handlePlantarse() {
  deshabilitarBoton(botonCarta);
  deshabilitarBoton(botonPlantarse);
  habilitarBoton(botonNuevaPartida);
  habilitarBoton(botonResultado);
  finalizarPartidaEstado();

  let mensajeMePlanto = "";

  switch (true) {
    case partida.puntuacion <= 4:
      mensajeMePlanto = "Has sido muy conservador!";
      break;
    case partida.puntuacion > 4 && partida.puntuacion < 6:
      mensajeMePlanto = "Te ha entrado el canguelo eh?";
      break;
    case partida.puntuacion >= 6 || partida.puntuacion <= 7:
      mensajeMePlanto = "Casi casi...";
      break;
    case partida.puntuacion === 7.5:
      mensajeMePlanto = "¡Lo has clavado! ¡Enhorabuena!";
    default:
      mensajeMePlanto = "Ha habido un error con la puntuación";
      break;
  }

  if (mensajePlantarse && mensajePlantarse instanceof HTMLElement) {
    mensajePlantarse.innerHTML = mensajeMePlanto;
  }
}

export function handleNuevaPartida() {
  nuevaPartidaLogica();
  muestraPuntuacion();
  mensajeRestultado.innerHTML = "";
  mensajePlantarse.innerHTML = "";
  habilitarBoton(botonCarta);
  habilitarBoton(botonPlantarse);
  deshabilitarBoton(botonResultado);
  imagen.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  imagen.alt = "carta boca abajo";
}

export function handlePedirCarta() {
  let carta = pedirCarta();
  mostrarCarta(carta);
  actualizarPuntuacion(carta);
  muestraPuntuacion();

  if (partida.puntuacion > 7.5) {
    finalizarPartida(partida.puntuacion, "GAME OVER!!!!!!!");
  } else if (partida.puntuacion === 7.5) {
    finalizarPartida(partida.puntuacion, "HAS GANADO 🥳🥳🥳🥳🥳");
  }
}

export function handleSiguienteCarta() {
  const mensaje = siguienteCarta();
  alert(mensaje);

  if (partida.puntuacion >= 7.5) {
    deshabilitarBoton(botonResultado);
  }
}
