import { BuffDto } from '../../../../attributes/dto/buffDto';
import { DecidueyeBuffEnum } from './decidueyeBuff.enum';
import { DECIDUEYE_ATK_SPEED_BUFF } from '../../../../../infrastructure/storage/pokemons/decidueye/atkSpeedBuff.constant';

export const decidueyeSpeed = (
  currentSpeed: number,
  level: number,
  boostMap: Map<string, BuffDto>,
) => {
  if (boostMap.has(DecidueyeBuffEnum.Leafage)) {
    currentSpeed += DECIDUEYE_ATK_SPEED_BUFF[DecidueyeBuffEnum.Leafage]();
  }
  if (boostMap.has(DecidueyeBuffEnum.boost)) {
    const aux = boostMap.get(DecidueyeBuffEnum.boost);
    currentSpeed += DECIDUEYE_ATK_SPEED_BUFF[DecidueyeBuffEnum.boost](
      aux.stack,
    );
  }
  if (boostMap.has(DecidueyeBuffEnum['Razor Leaf'])) {
    currentSpeed +=
      DECIDUEYE_ATK_SPEED_BUFF[DecidueyeBuffEnum['Razor Leaf']](level);
  }
  return currentSpeed;
};
