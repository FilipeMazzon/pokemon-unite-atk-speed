import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getGreedentStats } from '../greedent/statsBase.helper';

export const getZoroarkStats = (): PokemonStats[] => getGreedentStats();
