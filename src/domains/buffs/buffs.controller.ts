import { Controller, Get, Param } from '@nestjs/common';
import { BuffsService } from './buffs.service';

@Controller('buffs')
export class BuffsController {
  constructor(private readonly buffsService: BuffsService) {}

  @Get()
  findGenericBuffsOptions() {
    return this.buffsService.findGenericBuffsOptions();
  }

  @Get(':pokemon')
  findByPokemon(@Param('pokemon') pokemon: string) {
    return this.buffsService.findByPokemon(pokemon);
  }
}
