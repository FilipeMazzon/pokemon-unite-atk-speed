import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getGlaceonStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 12 },
    { level: 3, atkSpeed: 14.29 },
    { level: 4, atkSpeed: 25.93 },
    { level: 5, atkSpeed: 28.97 },
    { level: 6, atkSpeed: 32.46 },
    { level: 7, atkSpeed: 36.47 },
    { level: 8, atkSpeed: 41.09 },
    { level: 9, atkSpeed: 46.41 },
    { level: 10, atkSpeed: 52.53 },
    { level: 11, atkSpeed: 59.57 },
    { level: 12, atkSpeed: 67.67 },
    { level: 13, atkSpeed: 76.99 },
    { level: 14, atkSpeed: 87.7 },
    { level: 15, atkSpeed: 100 },
  ];
};
