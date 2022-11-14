import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getAbsolStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.71 },
    { level: 3, atkSpeed: 11.49 },
    { level: 4, atkSpeed: 12.35 },
    { level: 5, atkSpeed: 13.29 },
    { level: 6, atkSpeed: 14.33 },
    { level: 7, atkSpeed: 15.48 },
    { level: 8, atkSpeed: 16.74 },
    { level: 9, atkSpeed: 18.13 },
    { level: 10, atkSpeed: 19.66 },
    { level: 11, atkSpeed: 21.53 },
    { level: 12, atkSpeed: 23.21 },
    { level: 13, atkSpeed: 25.26 },
    { level: 14, atkSpeed: 27.51 },
    { level: 15, atkSpeed: 29.99 },
  ];
};
