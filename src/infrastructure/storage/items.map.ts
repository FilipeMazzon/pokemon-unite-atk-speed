import { ItemsNameEnum } from '../../domains/items/itemsName.enum';

const ItemsSpeedMap: Map<ItemsNameEnum, (level: number) => number> = new Map();

ItemsSpeedMap.set(
  ItemsNameEnum.scarf,
  (level: number) => Math.floor(level / 2) * 0.6,
);
ItemsSpeedMap.set(
  ItemsNameEnum['Muscle Band'],
  (level: number) => Math.floor(level / 2) * 0.5,
);

export default ItemsSpeedMap;
