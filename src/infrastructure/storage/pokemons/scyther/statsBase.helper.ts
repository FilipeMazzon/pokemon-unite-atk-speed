import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getGreedentStats } from '../greedent/statsBase.helper';

export const getScytherStats = (): PokemonStats[] => getGreedentStats();
