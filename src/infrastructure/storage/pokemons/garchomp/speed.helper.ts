import { BuffDto } from '../../../../domains/attributes/dto/buffDto';
import { GarchompBuffEnum } from './garchompBuff.enum';
import { GARCHOMP_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';

export const garchompSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(GarchompBuffEnum.boosted)) {
    newSpeed += GARCHOMP_ATK_SPEED_BUFF[GarchompBuffEnum.boosted](level);
  }
  if (boostMap.has(GarchompBuffEnum.sandAttack)) {
    newSpeed += GARCHOMP_ATK_SPEED_BUFF[GarchompBuffEnum.sandAttack](level);
  }

  return newSpeed;
};
