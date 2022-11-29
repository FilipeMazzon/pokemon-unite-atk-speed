import { AlolaNinetalesBuffEnum } from './alolaNinetalesBuff.enum';

export const ALOLA_NINETALES_ATK_SPEED_BUFF = {
  [AlolaNinetalesBuffEnum['aurora veil']]: (level: number) => {
    if (level < 6) {
      return 0;
    }
    return 15;
  },
};
