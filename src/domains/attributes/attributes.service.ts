import { Injectable } from '@nestjs/common';
import { getStatsBase } from './helpers/getStatsBase.helper';
import { PokemonNamesEnum } from '../../infrastructure/enums/pokemonNames.enum';
import { AtkSpeedDto } from './dto/atkSpeed.dto';
import { BuffDto } from './dto/buffDto';
import { castArrayToMap } from '../../infrastructure/helpers/castArrayToMap.helper';
import { ItemsDto } from './dto/items.dto';
import { calculateAtkSpeed } from './atkSpeed.facade';
import { CalculateFramePerAtk } from './helpers/calculateFramePerAtk';

@Injectable()
export class AttributesService {
  findAll() {
    return `This action returns all attributes`;
  }

  getAtkSpeed(pokemon: PokemonNamesEnum, atkSpeedDto: AtkSpeedDto) {
    const baseAtkSpeed = getStatsBase(pokemon);
    const buffs: Map<string, BuffDto> = castArrayToMap<BuffDto>(
      atkSpeedDto.buffs,
    );
    const items: Map<string, ItemsDto> = castArrayToMap<ItemsDto>(
      atkSpeedDto.items,
    );

    return baseAtkSpeed.map((stats) => {
      return CalculateFramePerAtk(
        calculateAtkSpeed(
          pokemon,
          stats,
          buffs,
          items,
          atkSpeedDto.emblems,
          atkSpeedDto.additionalBuff,
        ),
      );
    });
  }
}
