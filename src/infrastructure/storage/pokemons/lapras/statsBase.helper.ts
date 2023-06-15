import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getLaprasStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.71 },
    { level: 3, atkSpeed: 11.49 },
    { level: 4, atkSpeed: 12.35 },
    { level: 5, atkSpeed: 13.3 },
    { level: 6, atkSpeed: 14.34 },
    { level: 7, atkSpeed: 15.49 },
    { level: 8, atkSpeed: 16.75 },
    { level: 9, atkSpeed: 18.14 },
    { level: 10, atkSpeed: 19.67 },
    { level: 11, atkSpeed: 21.36 },
    { level: 12, atkSpeed: 23.22 },
    { level: 13, atkSpeed: 25.27 },
    { level: 14, atkSpeed: 27.52 },
    { level: 15, atkSpeed: 30 },
  ];
};
