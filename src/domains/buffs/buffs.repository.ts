import { Buff } from './schemas/buff.schema';
import { BaseMongoRepository } from '../../infrastructure/repositories/baseMongo.repository';
import { Model } from 'mongoose';
import { MongoCollectionEnum } from '../../infrastructure/enums/mongoCollection.enum';
import { InjectModel } from '@nestjs/mongoose';

export class BuffsRepository extends BaseMongoRepository<Buff> {
  constructor(
    @InjectModel(MongoCollectionEnum.buffs)
    private readonly buffModel: Model<Buff>,
  ) {
    super(buffModel);
  }
}
