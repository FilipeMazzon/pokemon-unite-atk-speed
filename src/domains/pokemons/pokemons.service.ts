import { BadRequestException, Injectable } from '@nestjs/common';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';
import { POKEMON_HANDLE } from './constants/pokemonHandle.constant';
import PokemonStatsMap from '../../infrastructure/storage/pokemons/Stats.map';
import { PokemonStats } from '../attributes/interfaces/pokemonStats.interface';

@Injectable()
export class PokemonsService {
  findNames(): PokemonNamesEnum[] {
    return POKEMON_HANDLE;
  }

  findByName(name: PokemonNamesEnum): PokemonStats[] {
    const stats: PokemonStats[] | null = PokemonStatsMap.get(name);
    if (!stats) {
      throw new BadRequestException('pokemon not handle yet');
    }
    return stats;
  }
}
