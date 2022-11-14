import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getBlisseyStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.22 },
    { level: 3, atkSpeed: 10.47 },
    { level: 4, atkSpeed: 11.76 },
    { level: 5, atkSpeed: 12.1 },
    { level: 6, atkSpeed: 12.49 },
    { level: 7, atkSpeed: 12.94 },
    { level: 8, atkSpeed: 13.45 },
    { level: 9, atkSpeed: 14.04 },
    { level: 10, atkSpeed: 14.72 },
    { level: 11, atkSpeed: 15.5 },
    { level: 12, atkSpeed: 16.4 },
    { level: 13, atkSpeed: 17.43 },
    { level: 14, atkSpeed: 18.62 },
    { level: 15, atkSpeed: 19.99 },
  ];
};
