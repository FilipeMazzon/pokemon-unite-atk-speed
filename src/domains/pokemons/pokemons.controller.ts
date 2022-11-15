import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';
import { PokemonStats } from '../attributes/interfaces/pokemonStats.interface';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  findNames(): PokemonNamesEnum[] {
    return this.pokemonsService.findNames();
  }

  @Get('/stats/:name')
  findByName(@Param('name') name: string): PokemonStats[] {
    return this.pokemonsService.findByName(name as PokemonNamesEnum);
  }
}
