import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import PokemonStatsMap from '../../../infrastructure/storage/pokemons/Stats.map';
import { BadGatewayException } from '@nestjs/common';
import { PokemonStats } from '../interfaces/pokemonStats.interface';

export const getStatsBase = (pokemon: PokemonNamesEnum): PokemonStats[] => {
  if (!PokemonStatsMap.has(pokemon)) {
    throw new BadGatewayException('Pokemon not handle it yet');
  }
  return PokemonStatsMap.get(pokemon);
};
