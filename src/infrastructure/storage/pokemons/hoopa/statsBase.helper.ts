import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getHoopaStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 11.07 },
    { level: 3, atkSpeed: 12.24 },
    { level: 4, atkSpeed: 13.53 },
    { level: 5, atkSpeed: 14.95 },
    { level: 6, atkSpeed: 16.51 },
    { level: 7, atkSpeed: 18.23 },
    { level: 8, atkSpeed: 20.12 },
    { level: 9, atkSpeed: 22.21 },
    { level: 10, atkSpeed: 24.51 },
    { level: 11, atkSpeed: 27.04 },
    { level: 12, atkSpeed: 29.83 },
    { level: 13, atkSpeed: 32.9 },
    { level: 14, atkSpeed: 36.28 },
    { level: 15, atkSpeed: 40 },
  ];
};
