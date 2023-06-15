import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getComfeyStats } from '../comfey/statsBase.helper';

export const getMewStats = (): PokemonStats[] => getComfeyStats();
