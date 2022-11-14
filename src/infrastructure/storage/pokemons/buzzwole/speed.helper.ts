import { BuffDto } from '../../../../domains/attributes/dto/buffDto';

import { BUZZWOLE_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';
import { BuzzwoleBuffEnum } from './buzzwoleBuff.enum';

export const buzzwoleSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(BuzzwoleBuffEnum.Lunge)) {
    newSpeed += BUZZWOLE_ATK_SPEED_BUFF[BuzzwoleBuffEnum['Lunge']]();
  }
  if (boostMap.has(BuzzwoleBuffEnum['Beast Boost'])) {
    newSpeed += BUZZWOLE_ATK_SPEED_BUFF[BuzzwoleBuffEnum['Beast Boost']]();
  }
  return newSpeed;
};
