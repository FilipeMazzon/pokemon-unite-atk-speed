import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getDragapultStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 11.01 },
    { level: 3, atkSpeed: 12.22 },
    { level: 4, atkSpeed: 13.67 },
    { level: 5, atkSpeed: 18.91 },
    { level: 6, atkSpeed: 20.99 },
    { level: 7, atkSpeed: 23.49 },
    { level: 8, atkSpeed: 26.49 },
    { level: 9, atkSpeed: 37.09 },
    { level: 10, atkSpeed: 41.41 },
    { level: 11, atkSpeed: 46.6 },
    { level: 12, atkSpeed: 52.82 },
    { level: 13, atkSpeed: 60.29 },
    { level: 14, atkSpeed: 69.25 },
    { level: 15, atkSpeed: 80 },
  ];
};
