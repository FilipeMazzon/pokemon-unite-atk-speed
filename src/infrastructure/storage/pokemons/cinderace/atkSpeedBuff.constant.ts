import { CinderaceBuffEnum } from './cinderaceBuff.enum';

export const CINDERACE_ATK_SPEED_BUFF = {
  [CinderaceBuffEnum['blaze kick']]: (level: number, isPlus: boolean) => {
    if (level < 7) {
      return 0;
    }
    return isPlus ? 65 : 0;
  },
  [CinderaceBuffEnum.blaze]: () => {
    return 20;
  },
};
