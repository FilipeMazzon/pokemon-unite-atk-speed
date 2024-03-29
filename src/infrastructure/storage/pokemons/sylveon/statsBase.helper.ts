import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getSylveonStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.67 },
    { level: 3, atkSpeed: 11.43 },
    { level: 4, atkSpeed: 15.31 },
    { level: 5, atkSpeed: 16.32 },
    { level: 6, atkSpeed: 17.48 },
    { level: 7, atkSpeed: 18.82 },
    { level: 8, atkSpeed: 20.36 },
    { level: 9, atkSpeed: 22.13 },
    { level: 10, atkSpeed: 23.17 },
    { level: 11, atkSpeed: 26.52 },
    { level: 12, atkSpeed: 29.22 },
    { level: 13, atkSpeed: 32.32 },
    { level: 14, atkSpeed: 35.89 },
    { level: 15, atkSpeed: 39.99 },
  ];
};
