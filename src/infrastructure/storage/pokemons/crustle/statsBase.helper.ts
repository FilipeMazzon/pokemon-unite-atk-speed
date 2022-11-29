import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getCrustleStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.44 },
    { level: 3, atkSpeed: 10.96 },
    { level: 4, atkSpeed: 13.54 },
    { level: 5, atkSpeed: 14.22 },
    { level: 6, atkSpeed: 15 },
    { level: 7, atkSpeed: 15.89 },
    { level: 8, atkSpeed: 16.92 },
    { level: 9, atkSpeed: 18.1 },
    { level: 10, atkSpeed: 19.46 },
    { level: 11, atkSpeed: 21.02 },
    { level: 12, atkSpeed: 22.82 },
    { level: 13, atkSpeed: 24.89 },
    { level: 14, atkSpeed: 27.27 },
    { level: 15, atkSpeed: 30 },
  ];
};
