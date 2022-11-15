import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuffsModule } from './domains/buffs/buffs.module';
import { AttributesModule } from './domains/attributes/attributes.module';
import { PokemonsModule } from './domains/pokemons/pokemons.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGO_URL),
    BuffsModule,
    AttributesModule,
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
