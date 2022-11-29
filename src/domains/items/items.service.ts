import { Injectable } from '@nestjs/common';
import { ItemsNameEnum } from './itemsName.enum';

@Injectable()
export class ItemsService {
  findItems() {
    return Object.values(ItemsNameEnum);
  }
}
