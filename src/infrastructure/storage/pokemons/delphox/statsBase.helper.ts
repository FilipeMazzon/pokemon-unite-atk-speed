import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';

export const getDelphoxStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.21 },
    { level: 3, atkSpeed: 10.47 },
    { level: 4, atkSpeed: 11.53 },
    { level: 5, atkSpeed: 11.9 },
    { level: 6, atkSpeed: 13.85 },
    { level: 7, atkSpeed: 14.39 },
    { level: 8, atkSpeed: 15.03 },
    { level: 9, atkSpeed: 15.8 },
    { level: 10, atkSpeed: 16.73 },
    { level: 11, atkSpeed: 17.84 },
    { level: 12, atkSpeed: 19.17 },
    { level: 13, atkSpeed: 20.77 },
    { level: 14, atkSpeed: 22.69 },
    { level: 15, atkSpeed: 24.99 },
  ];
};
