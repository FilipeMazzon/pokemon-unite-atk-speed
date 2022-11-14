import { BuffDto } from '../../../../domains/attributes/dto/buffDto';
import { MachampBuffEnum } from './machampBuff.enum';
import { MACHAMP_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';

export const machampSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(MachampBuffEnum.bulkUp)) {
    newSpeed += MACHAMP_ATK_SPEED_BUFF[MachampBuffEnum.bulkUp](level);
  }
  if (boostMap.has(MachampBuffEnum.submission)) {
    const aux = boostMap.get(MachampBuffEnum.submission);
    newSpeed += MACHAMP_ATK_SPEED_BUFF[MachampBuffEnum.submission](
      level,
      aux.isPlus,
    );
  }
  return newSpeed;
};
