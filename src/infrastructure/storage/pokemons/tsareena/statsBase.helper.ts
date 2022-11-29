import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
//@todo add pokemon buffs later
export const getTsareenaStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.57 },
    { level: 3, atkSpeed: 11.26 },
    { level: 4, atkSpeed: 14.08 },
    { level: 5, atkSpeed: 15.07 },
    { level: 6, atkSpeed: 20.26 },
    { level: 7, atkSpeed: 21.69 },
    { level: 8, atkSpeed: 23.41 },
    { level: 9, atkSpeed: 25.47 },
    { level: 10, atkSpeed: 27.94 },
    { level: 11, atkSpeed: 30.91 },
    { level: 12, atkSpeed: 34.47 },
    { level: 13, atkSpeed: 38.74 },
    { level: 14, atkSpeed: 43.86 },
    { level: 15, atkSpeed: 50.01 },
  ];
};
