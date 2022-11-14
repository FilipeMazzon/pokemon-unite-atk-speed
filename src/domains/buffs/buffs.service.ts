import { Injectable } from '@nestjs/common';
import { BUFF_GENERIC } from '../../infrastructure/storage/buffGeneric.constant';

@Injectable()
export class BuffsService {
  findGenericBuffsOptions() {
    return BUFF_GENERIC;
  }

  findByPokemon(id: string) {
    return `This action returns a #${id} buff`;
  }
}
