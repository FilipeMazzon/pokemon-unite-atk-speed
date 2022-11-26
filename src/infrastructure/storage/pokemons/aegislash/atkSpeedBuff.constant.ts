import { AegislashBuffEnum } from './aegislashBuff.enum';

export const AEGISLASH_ATK_SPEED_BUFF = {
  [AegislashBuffEnum.stanceForm]: (level, form: string) => {
    if (level < 7) {
      return 0;
    }
    if (form === 'shield') {
      return -20;
    } else if (form === 'sword') {
      return 15;
    }
  },
  [AegislashBuffEnum.stanceChangeTemporary]: (level) => {
    if (level < 7) {
      return 0;
    }
    return 15;
  },
};
