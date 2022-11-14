import { PokemonStats } from '../../../domains/attributes/interfaces/pokemonStats.interface';
import { getDecidueyeStats } from './decidueye/statsBase.helper';
import { PokemonNamesEnum } from '../../enums/pokemonNames.enum';
import { getGreninjaStats } from './greninja/statsBase.helper';
import { getAbsolStats } from './absol/statsBase.helper';
import { getBuzzWoleStats } from './buzzwole/statsBase.helper';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());
PokemonStatsMap.set(PokemonNamesEnum.greninja, getGreninjaStats());
PokemonStatsMap.set(PokemonNamesEnum.absol, getAbsolStats());
PokemonStatsMap.set(PokemonNamesEnum.buzzwole, getBuzzWoleStats());

export default PokemonStatsMap;
