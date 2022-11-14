import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../../domains/attributes/dto/buffDto';
import { decidueyeSpeed } from './decidueye/speed.helper';
import { buzzwoleSpeed } from 'src/infrastructure/storage/pokemons/buzzwole/speed.helper';
import { absolSpeed } from './absol/speed.helper';

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
SpeedBuffMap.set(PokemonNamesEnum.buzzwole, buzzwoleSpeed);

export default SpeedBuffMap;
