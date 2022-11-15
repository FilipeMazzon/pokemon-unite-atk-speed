import { Injectable } from '@nestjs/common';
import { GENERIC_BUFFS_NAMES } from '../../infrastructure/storage/buffNames.map';
import { getBuffNames } from './helpers/buffNames.helper';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';

@Injectable()
export class BuffsService {
  findGenericBuffsOptions() {
    return GENERIC_BUFFS_NAMES;
  }

  findByPokemon(pokemonName: string) {
    return getBuffNames(pokemonName as PokemonNamesEnum);
  }
}
