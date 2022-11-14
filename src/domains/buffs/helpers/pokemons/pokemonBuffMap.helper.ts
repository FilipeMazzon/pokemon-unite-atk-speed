import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../../attributes/dto/buffDto';
import { decidueyeSpeed } from './decidueye/speed.helper';

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
