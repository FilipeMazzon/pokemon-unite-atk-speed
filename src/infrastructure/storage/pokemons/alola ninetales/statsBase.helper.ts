import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getCrustleStats } from '../crustle/statsBase.helper';

export const getAlolaNinetalesStats = (): PokemonStats[] => getCrustleStats();
