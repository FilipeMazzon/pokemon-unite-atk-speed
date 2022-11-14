import { ItemsDto } from '../attributes/dto/items.dto';
import { ItemsNameEnum } from './itemsName.enum';
import ItemsSpeedMap from './items.map';

export const calculateItemsSpeed = (
  currentSpeed,
  itemsMap: Map<string, ItemsDto>,
) => {
  let newSpeed = currentSpeed;
  if (itemsMap.has(ItemsNameEnum.scarf)) {
    const aux = itemsMap.get(ItemsNameEnum.scarf);
    newSpeed += ItemsSpeedMap.get(ItemsNameEnum.scarf)(aux.level);
  }
  if (itemsMap.has(ItemsNameEnum['Muscle Band'])) {
    const aux = itemsMap.get(ItemsNameEnum['Muscle Band']);
    newSpeed += ItemsSpeedMap.get(ItemsNameEnum['Muscle Band'])(aux.level);
  }
  return newSpeed;
};
