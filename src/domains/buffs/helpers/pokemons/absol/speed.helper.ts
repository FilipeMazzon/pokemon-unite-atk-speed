import { BuffDto } from '../../../../attributes/dto/buffDto';
import { ABSOL_ATK_SPEED_BUFF } from '../../../../../infrastructure/storage/pokemons/absol/atkSpeedBuff.constant';
import { AbsolBuffEnum } from './absolBuff.enum';

export const absolSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  if (boostMap.has(AbsolBuffEnum['suckerPunch+'])) {
    currentSpeed += ABSOL_ATK_SPEED_BUFF[AbsolBuffEnum['suckerPunch+']]();
  }
  return currentSpeed;
};
