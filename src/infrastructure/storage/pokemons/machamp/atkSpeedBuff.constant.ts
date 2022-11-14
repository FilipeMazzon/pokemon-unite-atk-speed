import { MachampBuffEnum } from './machampBuff.enum';

export const MACHAMP_ATK_SPEED_BUFF = {
  [MachampBuffEnum.bulkUp]: (level: number) => {
    if (level >= 5) {
      return 0;
    }
    return 40;
  },
  [MachampBuffEnum.submission]: (level: number, plus: boolean) => {
    if (level < 5) {
      return 0;
    }
    return plus ? 60 : 50;
  },
};
