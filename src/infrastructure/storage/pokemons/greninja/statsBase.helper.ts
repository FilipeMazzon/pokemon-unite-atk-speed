import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getDecidueyeStats } from '../decidueye/statsBase.helper';

export const getGreninjaStats = (): PokemonStats[] => getDecidueyeStats();
