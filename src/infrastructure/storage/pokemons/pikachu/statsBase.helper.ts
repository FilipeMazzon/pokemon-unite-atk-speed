import { PokemonStats } from '../../../../domains/attributes/interfaces/pokemonStats.interface';
import { getEspeonStats } from '../espeon/statsBase.helper';

export const getPikachuStats = (): PokemonStats[] => getEspeonStats();
