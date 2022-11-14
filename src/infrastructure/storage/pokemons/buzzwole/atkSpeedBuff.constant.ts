import { BuzzwoleBuffEnum } from './buzzwoleBuff.enum';

export const BUZZWOLE_ATK_SPEED_BUFF = {
  [BuzzwoleBuffEnum.Lunge]: () => 30,
  [BuzzwoleBuffEnum['Beast Boost']]: () => 50,
};
