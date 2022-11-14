import { PokemonNamesEnum } from '../enums/pokemonNames.enum';
import { PokemonBuffs } from '../../domains/buffs/interfaces/pokemonBuffs.interface';
import { DECIDUEYE_ATK_SPEED_BUFF } from './pokemons/decidueye/atkSpeedBuff.constant';

const atkSpeedMap = new Map<PokemonNamesEnum, PokemonBuffs>();

atkSpeedMap.set(PokemonNamesEnum.decidueye, DECIDUEYE_ATK_SPEED_BUFF);

export default atkSpeedMap;
