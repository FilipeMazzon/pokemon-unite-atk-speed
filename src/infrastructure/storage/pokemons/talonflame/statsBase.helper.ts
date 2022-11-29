import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getTalonflameStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.43 },
    { level: 3, atkSpeed: 10.94 },
    { level: 4, atkSpeed: 11.56 },
    { level: 5, atkSpeed: 13.8 },
    { level: 6, atkSpeed: 14.69 },
    { level: 7, atkSpeed: 18.76 },
    { level: 8, atkSpeed: 20.05 },
    { level: 9, atkSpeed: 21.59 },
    { level: 10, atkSpeed: 23.44 },
    { level: 11, atkSpeed: 25.66 },
    { level: 12, atkSpeed: 28.33 },
    { level: 13, atkSpeed: 31.53 },
    { level: 14, atkSpeed: 35.37 },
    { level: 15, atkSpeed: 39.98 },
  ];
};
