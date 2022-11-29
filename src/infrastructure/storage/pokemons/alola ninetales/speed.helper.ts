import { BuffDto } from '../../../../domains/attributes/dto/buffDto';
import { AlolaNinetalesBuffEnum } from './alolaNinetalesBuff.enum';
import { ALOLA_NINETALES_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';

export const alolaNinetalesSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(AlolaNinetalesBuffEnum['aurora veil'])) {
    newSpeed +=
      ALOLA_NINETALES_ATK_SPEED_BUFF[AlolaNinetalesBuffEnum['aurora veil']](
        level,
      );
  }
  return newSpeed;
};
