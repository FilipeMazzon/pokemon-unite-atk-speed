import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../../domains/attributes/dto/buffDto';
import { decidueyeSpeed } from '../../../domains/buffs/helpers/pokemons/decidueye/speed.helper';

const SpeedBuffMap = new Map<
  PokemonNamesEnum,
  (
    currentSpeed: number,
    level: number,
    buffsMap: Map<string, BuffDto>,
  ) => number
>();

SpeedBuffMap.set(PokemonNamesEnum.decidueye, decidueyeSpeed);

export default SpeedBuffMap;
