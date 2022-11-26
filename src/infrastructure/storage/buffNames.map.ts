import { BUFF_GENERIC } from './buffGeneric.constant';
import { PokemonNamesEnum } from '../enums/pokemonNames.enum';
import { ABSOL_ATK_SPEED_BUFF } from './pokemons/absol/atkSpeedBuff.constant';
import { DECIDUEYE_ATK_SPEED_BUFF } from './pokemons/decidueye/atkSpeedBuff.constant';
import { AEGISLASH_ATK_SPEED_BUFF } from './pokemons/aegislash/atkSpeedBuff.constant';
import { BUZZWOLE_ATK_SPEED_BUFF } from './pokemons/buzzwole/atkSpeedBuff.constant';
import { MACHAMP_ATK_SPEED_BUFF } from './pokemons/machamp/atkSpeedBuff.constant';
import { CINDERACE_ATK_SPEED_BUFF } from './pokemons/cinderace/atkSpeedBuff.constant';

export const GENERIC_BUFFS_NAMES: string[] = [...Object.keys(BUFF_GENERIC)];

const pokemonsBuffsNamesMap: Map<string, string[]> = new Map<
  string,
  string[]
>();

pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.absol,
  Object.keys(ABSOL_ATK_SPEED_BUFF),
);
pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.machamp,
  Object.keys(MACHAMP_ATK_SPEED_BUFF),
);
pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.cinderace,
  Object.keys(CINDERACE_ATK_SPEED_BUFF),
);
pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.buzzwole,
  Object.keys(BUZZWOLE_ATK_SPEED_BUFF),
);
pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.aegislash,
  Object.keys(AEGISLASH_ATK_SPEED_BUFF),
);
pokemonsBuffsNamesMap.set(
  PokemonNamesEnum.decidueye,
  Object.keys(DECIDUEYE_ATK_SPEED_BUFF),
);

export default pokemonsBuffsNamesMap;
