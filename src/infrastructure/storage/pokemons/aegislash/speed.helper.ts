import { BuffDto } from '../../../../domains/attributes/dto/buffDto';

import { BUZZWOLE_ATK_SPEED_BUFF } from './atkSpeedBuff.constant';
import { AegislashBuffEnum } from './aegislashBuff.enum';

export const aegislashSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  let newSpeed = currentSpeed;
  if (boostMap.has(AegislashBuffEnum.stanceForm)) {
    const aux = boostMap.get(AegislashBuffEnum.stanceForm);
    newSpeed += BUZZWOLE_ATK_SPEED_BUFF[AegislashBuffEnum.stanceForm](
      level,
      aux.form,
    );
  }
  if (boostMap.has(AegislashBuffEnum['stanceChangeTemporary'])) {
    newSpeed +=
      BUZZWOLE_ATK_SPEED_BUFF[AegislashBuffEnum.stanceChangeTemporary](level);
  }
  return newSpeed;
};
