import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { PokemonStats } from './interfaces/pokemonStats.interface';
import { CalculateBuffsSpeed } from '../buffs/helpers/calculateBuffsSpeed.helper';
import { BuffDto } from './dto/buffDto';
import { ItemsDto } from './dto/items.dto';
import { EmblemsDto } from './dto/emblems.dto';
import { calculateItemsSpeed } from '../items/calculateItemsSpeed.helper';
import { getBonusSpeedRedEmblems } from '../../infrastructure/storage/red-emblems/getBonusSpeedRedEmblems';

export const calculateAtkSpeed = (
  pokemon: PokemonNamesEnum,
  baseStats: PokemonStats,
  buffsMap: Map<string, BuffDto>,
  itemsMap: Map<string, ItemsDto>,
  emblems: EmblemsDto,
  additionalBuff = 0,
) => {
  let atkSpeed = baseStats.atkSpeed;
  if (buffsMap.size) {
    atkSpeed = CalculateBuffsSpeed(
      atkSpeed,
      pokemon,
      baseStats.level,
      buffsMap,
      itemsMap,
    );
  }
  if (itemsMap.size) {
    atkSpeed = calculateItemsSpeed(atkSpeed, itemsMap);
  }

  if (emblems?.level) {
    atkSpeed = getBonusSpeedRedEmblems(emblems.level);
  }
  if (additionalBuff) {
    atkSpeed += additionalBuff;
  }
  return atkSpeed;
};
