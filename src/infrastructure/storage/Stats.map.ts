import { PokemonStats } from '../../domains/attributes/interfaces/pokemonStats.interface';
import { getDecidueyeStats } from './pokemons/decidueye/statsBase.helper';
import { PokemonNamesEnum } from '../enums/pokemonNames.enum';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());

export default PokemonStatsMap;
