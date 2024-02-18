import { partida } from "./modelo";
import { elementosDOM, muestraPuntuacion } from "./ui";

export function generarNumero() {
    return Math.floor(Math.random() * 10) + 1;
  };

export function actualizarPuntuacion(carta: number) {
  if (carta >= 1 && carta <= 7) {
    partida.puntuacion = partida.puntuacion + carta;
  } else {
    partida.puntuacion = partida.puntuacion + 0.5;
  }
  muestraPuntuacion();
};

export function saberResultado() {
    let mensaje = "La siguiente carta hubiese sido esta: ";
    let valorSiguienteCarta = generarNumero();
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
      elementosDOM.botonResultado.disabled = true;
      mensaje += `Habrías ganado el juego. `;
    }
  
    if (partida.puntuacion > 7.5) {
      elementosDOM.botonResultado.disabled = true;
      mensaje += `Ya habrías alcanzado una puntuación mayor que 7.5.`;
    } else {
      mensaje += `La puntuación final sería: ${partida.puntuacion.toFixed(1)}`;
    }
  
    alert(mensaje);
  };
