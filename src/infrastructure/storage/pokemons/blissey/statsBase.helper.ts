import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getBlisseyStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.22 },
    { level: 3, atkSpeed: 10.48 },
    { level: 4, atkSpeed: 11.77 },
    { level: 5, atkSpeed: 12.11 },
    { level: 6, atkSpeed: 12.5 },
    { level: 7, atkSpeed: 12.95 },
    { level: 8, atkSpeed: 13.46 },
    { level: 9, atkSpeed: 14.05 },
    { level: 10, atkSpeed: 14.73 },
    { level: 11, atkSpeed: 15.51 },
    { level: 12, atkSpeed: 16.41 },
    { level: 13, atkSpeed: 17.44 },
    { level: 14, atkSpeed: 18.63 },
    { level: 15, atkSpeed: 20 },
  ];
};
