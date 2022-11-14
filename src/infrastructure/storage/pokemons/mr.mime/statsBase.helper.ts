import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getBuzzWoleStats } from '../buzzwole/statsBase.helper';

export const getMrmimeStats = (): PokemonStats[] => getBuzzWoleStats();
