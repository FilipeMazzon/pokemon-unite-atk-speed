import { BuffDto } from '../../../../domains/attributes/dto/buffDto';
import { ABSOL_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';
import { AbsolBuffEnum } from './absolBuff.enum';

export const absolSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(AbsolBuffEnum['suckerPunch+'])) {
    newSpeed += ABSOL_ATK_SPEED_BUFF[AbsolBuffEnum['suckerPunch+']]();
  }
  return newSpeed;
};
