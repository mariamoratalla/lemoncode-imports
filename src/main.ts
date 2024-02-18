import { saberResultado } from "./motor";
import {
  elementosDOM,
  muestraPuntuacion,
  pedirCarta,
  plantarse,
  reset,
} from "./ui";

const nuevaPartida = () => {
  muestraPuntuacion();
};

document.addEventListener("DOMContentLoaded", nuevaPartida);
elementosDOM.botonCarta.addEventListener("click", pedirCarta);
elementosDOM.botonPlantarse.addEventListener("click", plantarse);
elementosDOM.botonNuevaPartida.addEventListener("click", reset);
elementosDOM.botonResultado.addEventListener("click", saberResultado);
