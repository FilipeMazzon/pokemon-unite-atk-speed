export interface PokemonBuffs {
  [move: string]: (...args) => number;
}
