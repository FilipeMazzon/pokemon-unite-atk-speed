import { BUFF_GENERIC } from './buffGeneric.constant';
import { PokemonNamesEnum } from '../enums/pokemonNames.enum';
import { ABSOL_ATK_SPEED_BUFF } from './pokemons/absol/atkSpeedBuff.constant';

export const GENERIC_BUFFS_NAMES: string[] = [...Object.keys(BUFF_GENERIC)];

const pokemonsBuffs: Map<string, string[]> = new Map<string, string[]>();

pokemonsBuffs.set(PokemonNamesEnum.absol, Object.keys(ABSOL_ATK_SPEED_BUFF));
