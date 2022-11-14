import { ItemsNameEnum } from './itemsName.enum';

export const ITEMS_MAP = {
  [ItemsNameEnum.scarf]: (_: number) => {
    return 9;
  },
  [ItemsNameEnum['Muscle Band']]: (level: number) => {
    return Math.floor(level / 2) * 0.5;
  },
};
