import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../../domains/attributes/dto/buffDto';
import { decidueyeSpeed } from '../../../domains/buffs/helpers/pokemons/decidueye/speed.helper';
import { absolSpeed } from '../../../domains/buffs/helpers/pokemons/absol/speed.helper';

const SpeedBuffMap = new Map<
  PokemonNamesEnum,
  (
    currentSpeed: number,
    level: number,
    buffsMap: Map<string, BuffDto>,
  ) => number
>();

SpeedBuffMap.set(PokemonNamesEnum.decidueye, decidueyeSpeed);
SpeedBuffMap.set(PokemonNamesEnum.absol, absolSpeed);

export default SpeedBuffMap;
