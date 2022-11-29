import { GarchompBuffEnum } from './garchompBuff.enum';

export const GARCHOMP_ATK_SPEED_BUFF = {
  [GarchompBuffEnum.boosted]: (level: number) => 3 * (level - 1) + 28,
  [GarchompBuffEnum.sandAttack]: (level: number) => {
    if (level < 5) {
      return 30;
    }
    return 0;
  },
};
