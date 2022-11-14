import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';
import { AtkSpeedDto } from './dto/atkSpeed.dto';

@Controller('attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}

  @Get()
  findAll() {
    return this.attributesService.findAll();
  }

  @Post('/atk-speed/:pokemon')
  getAtkSpeed(
    @Param('pokemon') pokemon: PokemonNamesEnum,
    @Body() atkSpeedDto: AtkSpeedDto,
  ) {
    return this.attributesService.getAtkSpeed(pokemon, atkSpeedDto);
  }
}
