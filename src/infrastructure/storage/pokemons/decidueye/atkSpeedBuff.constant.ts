import { DecidueyeBuffEnum } from './decidueyeBuff.enum';

export const DECIDUEYE_ATK_SPEED_BUFF = {
  [DecidueyeBuffEnum.Leafage]: () => 25,
  [DecidueyeBuffEnum.boost]: (stack = 4) => stack * 3,
  [DecidueyeBuffEnum['Razor Leaf']]: (level) => level - 1 + 21,
};
