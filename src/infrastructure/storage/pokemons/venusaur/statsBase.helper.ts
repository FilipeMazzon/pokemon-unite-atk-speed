import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getVenusaurStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.14 },
    { level: 3, atkSpeed: 10.31 },
    { level: 4, atkSpeed: 10.52 },
    { level: 5, atkSpeed: 11.27 },
    { level: 6, atkSpeed: 11.57 },
    { level: 7, atkSpeed: 11.93 },
    { level: 8, atkSpeed: 12.36 },
    { level: 9, atkSpeed: 13.87 },
    { level: 10, atkSpeed: 14.49 },
    { level: 11, atkSpeed: 15.23 },
    { level: 12, atkSpeed: 16.12 },
    { level: 13, atkSpeed: 17.19 },
    { level: 14, atkSpeed: 18.47 },
    { level: 15, atkSpeed: 20.21 },
  ];
};
