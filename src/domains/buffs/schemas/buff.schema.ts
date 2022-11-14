import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AttributesTypeEnum } from '../../attributes/enums/attributesType.enum';

export type BuffDocument = HydratedDocument<Buff>;

@Schema()
export class Buff {
  @Prop({ type: String, required: true })
  name: string;

  @Prop()
  pokemon?: string;

  @Prop({ type: Boolean, default: false })
  generic: boolean;

  @Prop({ type: Number, required: true })
  value: number;

  @Prop({ type: String, required: true })
  type: AttributesTypeEnum;
}

export const BuffSchema = SchemaFactory.createForClass(Buff);
