import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getGarchompStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.64 },
    { level: 3, atkSpeed: 11.41 },
    { level: 4, atkSpeed: 12.34 },
    { level: 5, atkSpeed: 15.71 },
    { level: 6, atkSpeed: 17.05 },
    { level: 7, atkSpeed: 18.66 },
    { level: 8, atkSpeed: 20.59 },
    { level: 9, atkSpeed: 27.41 },
    { level: 10, atkSpeed: 30.19 },
    { level: 11, atkSpeed: 33.53 },
    { level: 12, atkSpeed: 37.53 },
    { level: 13, atkSpeed: 42.33 },
    { level: 14, atkSpeed: 48.09 },
    { level: 15, atkSpeed: 55 },
  ];
};
