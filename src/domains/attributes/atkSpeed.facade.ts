import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { PokemonStats } from './interfaces/pokemonStats.interface';
import { CalculateBuffsSpeed } from '../buffs/helpers/calculateBuffsSpeed.helper';
import { BuffDto } from './dto/buffDto';
import { ItemsDto } from './dto/items.dto';
import { EmblemsDto } from './dto/emblems.dto';

export const calculateAtkSpeed = (
  pokemon: PokemonNamesEnum,
  baseStats: PokemonStats,
  buffsMap: Map<string, BuffDto>,
  itemsMap: Map<string, ItemsDto>,
  _emblems: EmblemsDto,
) => {
  let atkSpeed = baseStats.atkSpeed;
  atkSpeed = CalculateBuffsSpeed(
    atkSpeed,
    pokemon,
    baseStats.level,
    buffsMap,
    itemsMap,
  );

  return atkSpeed;
};
