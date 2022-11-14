import { BuffDto } from '../../../../domains/attributes/dto/buffDto';
import { CinderaceBuffEnum } from './cinderaceBuff.enum';
import { CINDERACE_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';

export const cinderaceSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(CinderaceBuffEnum['blaze kick'])) {
    const aux = boostMap.get(CinderaceBuffEnum['blaze kick']);
    newSpeed += CINDERACE_ATK_SPEED_BUFF[CinderaceBuffEnum['blaze kick']](
      level,
      aux.isPlus,
    );
  }
  if (boostMap.has(CinderaceBuffEnum.blaze)) {
    newSpeed += CINDERACE_ATK_SPEED_BUFF[CinderaceBuffEnum.blaze]();
  }
  return newSpeed;
};
