interface Partida {
  puntuacion: number;
  estado: "jugando" | "finalizada" | "no inicializada";
}

export const partida: Partida = {
  puntuacion: 0,
  estado: "no inicializada",
};

export type Carta = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;
