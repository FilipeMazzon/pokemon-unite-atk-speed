import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../../domains/attributes/dto/buffDto';
import { decidueyeSpeed } from './decidueye/speed.helper';
import { buzzwoleSpeed } from 'src/infrastructure/storage/pokemons/buzzwole/speed.helper';
import { absolSpeed } from './absol/speed.helper';
import { aegislashSpeed } from './aegislash/speed.helper';
import { machampSpeed } from './machamp/speed.helper';
import { alolaNinetalesSpeed } from './alola ninetales/speed.helper';
import { garchompSpeed } from './garchomp/speed.helper';

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
SpeedBuffMap.set(PokemonNamesEnum.aegislash, aegislashSpeed);
SpeedBuffMap.set(PokemonNamesEnum.machamp, machampSpeed);
SpeedBuffMap.set(PokemonNamesEnum.alolaNinetales, alolaNinetalesSpeed);
SpeedBuffMap.set(PokemonNamesEnum.garchomp, garchompSpeed);

export default SpeedBuffMap;
