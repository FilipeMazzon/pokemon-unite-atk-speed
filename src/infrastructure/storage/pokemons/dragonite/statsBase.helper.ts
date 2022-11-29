import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
//@todo add pokemon buffs
export const getDragoniteStats = (): PokemonStats[] => {
  return [
    { level: 1, atkSpeed: 10 },
    { level: 2, atkSpeed: 10.29 },
    { level: 3, atkSpeed: 10.63 },
    { level: 4, atkSpeed: 11.04 },
    { level: 5, atkSpeed: 12.54 },
    { level: 6, atkSpeed: 13.14 },
    { level: 7, atkSpeed: 13.86 },
    { level: 8, atkSpeed: 16.72 },
    { level: 9, atkSpeed: 17.75 },
    { level: 10, atkSpeed: 18.98 },
    { level: 11, atkSpeed: 20.46 },
    { level: 12, atkSpeed: 22.24 },
    { level: 13, atkSpeed: 24.37 },
    { level: 14, atkSpeed: 26.93 },
    { level: 15, atkSpeed: 30 },
  ];
};
