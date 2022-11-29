import { BadRequestException, Injectable } from '@nestjs/common';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';
import PokemonStatsMap from '../../infrastructure/storage/pokemons/Stats.map';
import { PokemonStats } from '../attributes/interfaces/pokemonStats.interface';

@Injectable()
export class PokemonsService {
  findNames(): PokemonNamesEnum[] {
    return Object.keys(PokemonNamesEnum) as PokemonNamesEnum[];
  }

  findByName(name: PokemonNamesEnum): PokemonStats[] {
    const stats: PokemonStats[] | null = PokemonStatsMap.get(name);
    if (!stats) {
      throw new BadRequestException('pokemon not handle yet');
    }
    return stats;
  }
}
