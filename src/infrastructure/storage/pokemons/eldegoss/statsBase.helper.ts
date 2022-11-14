import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getBlisseyStats } from '../blissey/statsBase.helper';

export const getEldegossStats = (): PokemonStats[] => getBlisseyStats();
