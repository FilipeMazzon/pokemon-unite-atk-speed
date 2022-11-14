import { ItemsDto } from 'src/domains/attributes/dto/items.dto';
import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { BuffDto } from '../../attributes/dto/buffDto';
import { GenericBuffsEnum } from '../enums/genericBuffs.enum';
import { BUFF_GENERIC } from '../../../infrastructure/storage/buffGeneric.constant';
import { ItemsNameEnum } from '../../items/itemsName.enum';
import SpeedBuffMap from '../../../infrastructure/storage/pokemons/pokemonBuffMap.helper';

const genericBuffs = (
  currentSpeed: number,
  level: number,
  buffsMap: Map<string, BuffDto>,
  itemsMap: Map<string, ItemsDto>,
) => {
  let newSpeed = currentSpeed;
  if (buffsMap.has(GenericBuffsEnum['X-Attack'])) {
    newSpeed += BUFF_GENERIC[GenericBuffsEnum['X-Attack']];
  }
  if (buffsMap.has(GenericBuffsEnum['Help hands'])) {
    newSpeed += BUFF_GENERIC[GenericBuffsEnum['Help hands']];
  }
  if (buffsMap.has(GenericBuffsEnum['Mew Coaching'])) {
    newSpeed += BUFF_GENERIC[GenericBuffsEnum['Mew Coaching']];
  }
  if (
    buffsMap.has(GenericBuffsEnum['Scarf Boosted']) &&
    itemsMap.has(ItemsNameEnum.scarf)
  ) {
    newSpeed += BUFF_GENERIC[GenericBuffsEnum['Scarf Boosted']];
  }
  return newSpeed;
};

export const CalculateBuffsSpeed = (
  currentSpeed: number,
  pokemonName: PokemonNamesEnum,
  level: number,
  buffsMap: Map<string, BuffDto>,
  itemsMap: Map<string, ItemsDto>,
) => {
  let newSpeed = currentSpeed;
  newSpeed = genericBuffs(newSpeed, level, buffsMap, itemsMap);
  if (SpeedBuffMap.has(pokemonName)) {
    newSpeed = SpeedBuffMap.get(pokemonName)(newSpeed, level, buffsMap);
  }
  return newSpeed;
};
