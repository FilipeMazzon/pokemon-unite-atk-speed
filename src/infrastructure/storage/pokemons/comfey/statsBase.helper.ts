/* eslint-disable */
import { PokemonStats } from "../../../../domains/attributes/interfaces/pokemonStats.interface";

export const getComfeyStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.36},
    { level: 3, atkSpeed: 10.75 },
    { level: 4, atkSpeed: 11.18 },
    { level: 5, atkSpeed: 11.65 },
    { level: 6, atkSpeed: 12.17 },
    { level: 7, atkSpeed: 12.74 },
    { level: 8, atkSpeed: 13.37 },
    { level: 9, atkSpeed: 14.07 },
    { level: 10, atkSpeed: 14.84},
    { level: 11, atkSpeed: 15.68 },
    { level: 12, atkSpeed: 16.61},
    { level: 13, atkSpeed: 17.63 },
    { level: 14, atkSpeed: 18.76 },
    { level: 15, atkSpeed: 20 }
  ];
};
