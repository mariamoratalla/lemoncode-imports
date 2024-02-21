import { Carta, partida } from "./modelo";

function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}

export function actualizarPuntuacion(carta: number) {
  if (carta >= 1 && carta <= 7) {
    partida.puntuacion += carta;
  } else {
    partida.puntuacion += 0.5;
  }
}

export function pedirCarta(): Carta {
  let numero = generarNumero();
  let carta: Carta;

  if (numero > 7) {
    carta = (numero + 2) as Carta;
  } else {
    carta = numero as Carta;
  }
  partida.estado = "jugando";

  return carta;
}

export function siguienteCarta() {
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
    mensaje += `Habrías ganado el juego. `;
  }

  if (partida.puntuacion > 7.5) {
    mensaje += `Ya habrías alcanzado una puntuación mayor que 7.5.`;
  } else {
    mensaje += `La puntuación final sería: ${partida.puntuacion.toFixed(1)}`;
  }

  return mensaje;
}

export function nuevaPartidaLogica() {
  partida.puntuacion = 0;
  partida.estado = "no inicializada";
}

export function finalizarPartidaEstado() {
  partida.estado = "finalizada";
}
