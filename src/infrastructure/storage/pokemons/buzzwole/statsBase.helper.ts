import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getAbsolStats } from '../absol/statsBase.helper';

export const getBuzzWoleStats = (): PokemonStats[] => getAbsolStats();
