import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getHoopaStats } from '../hoopa/statsBase.helper';

export const getSnorlaxStats = (): PokemonStats[] => getHoopaStats();
