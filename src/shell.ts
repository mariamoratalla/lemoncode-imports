import {
  botonCarta,
  botonNuevaPartida,
  botonPlantarse,
  botonResultado,
  handleNuevaPartida,
  handlePedirCarta,
  handlePlantarse,
  handleSiguienteCarta
} from "./ui";

document.addEventListener("DOMContentLoaded", handleNuevaPartida);

if (botonCarta && botonCarta instanceof HTMLButtonElement) {
  botonCarta.addEventListener("click", handlePedirCarta);
}

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", handlePlantarse);
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handleNuevaPartida);
}

if (botonResultado && botonResultado instanceof HTMLButtonElement) {
  botonResultado.addEventListener("click", handleSiguienteCarta);
}
