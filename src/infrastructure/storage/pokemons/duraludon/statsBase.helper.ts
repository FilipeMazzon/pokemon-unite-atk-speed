import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getDuraludonStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 14.39 },
    { level: 3, atkSpeed: 19.22 },
    { level: 4, atkSpeed: 24.53 },
    { level: 5, atkSpeed: 30.38 },
    { level: 6, atkSpeed: 36.81 },
    { level: 7, atkSpeed: 43.88 },
    { level: 8, atkSpeed: 51.66 },
    { level: 9, atkSpeed: 60.22 },
    { level: 10, atkSpeed: 69.64 },
    { level: 11, atkSpeed: 80 },
    { level: 12, atkSpeed: 80 },
    { level: 13, atkSpeed: 80 },
    { level: 14, atkSpeed: 80 },
    { level: 15, atkSpeed: 80 },
  ];
};
