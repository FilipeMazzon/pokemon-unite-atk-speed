import { PokemonStats } from '../../domains/attributes/interfaces/pokemonStats.interface';
import { getDecidueyeStats } from './pokemons/decidueye/statsBase.helper';
import { PokemonNamesEnum } from '../enums/pokemonNames.enum';
import { getGreninjaStats } from './pokemons/greninja/statsBase.helper';
import { getAbsolStats } from './pokemons/absol/statsBase.helper';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());
PokemonStatsMap.set(PokemonNamesEnum.greninja, getGreninjaStats());
PokemonStatsMap.set(PokemonNamesEnum.absol, getAbsolStats());

export default PokemonStatsMap;
