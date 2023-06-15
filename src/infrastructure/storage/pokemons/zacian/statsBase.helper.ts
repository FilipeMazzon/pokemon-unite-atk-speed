import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getZacianStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.53 },
    { level: 3, atkSpeed: 11.12 },
    { level: 4, atkSpeed: 11.77 },
    { level: 5, atkSpeed: 12.48 },
    { level: 6, atkSpeed: 13.26 },
    { level: 7, atkSpeed: 14.12 },
    { level: 8, atkSpeed: 15.07 },
    { level: 9, atkSpeed: 16.11 },
    { level: 10, atkSpeed: 17.26 },
    { level: 11, atkSpeed: 18.53 },
    { level: 12, atkSpeed: 19.92 },
    { level: 13, atkSpeed: 21.45 },
    { level: 14, atkSpeed: 23.14 },
    { level: 15, atkSpeed: 25 },
  ];
};
