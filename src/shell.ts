import { saberResultado } from "./motor";
import { elementosDOM, nuevaPartida, pedirCarta, plantarse } from "./ui";

document.addEventListener("DOMContentLoaded", nuevaPartida);
elementosDOM.botonCarta.addEventListener("click", pedirCarta);
elementosDOM.botonPlantarse.addEventListener("click", plantarse);
elementosDOM.botonNuevaPartida.addEventListener("click", nuevaPartida);
elementosDOM.botonResultado.addEventListener("click", saberResultado);