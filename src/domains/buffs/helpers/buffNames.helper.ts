import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import { PokemonBuffName } from '../interfaces/pokemonBuffName.interface';
import { PokemonBuffTypesEnum } from '../enums/pokemonBuffTypes.enum';
import { AegislashBuffEnum } from '../../../infrastructure/storage/pokemons/aegislash/aegislashBuff.enum';
import { DecidueyeBuffEnum } from '../../../infrastructure/storage/pokemons/decidueye/decidueyeBuff.enum';
import { CinderaceBuffEnum } from '../../../infrastructure/storage/pokemons/cinderace/cinderaceBuff.enum';
import pokemonsBuffsNamesMap from '../../../infrastructure/storage/buffNames.map';

export const createDefaultOptions = (skillName: string): PokemonBuffName => {
  return {
    name: skillName,
    options: [
      {
        name: 'false',
        type: PokemonBuffTypesEnum.default,
      },
      {
        name: 'true',
        type: PokemonBuffTypesEnum.default,
      },
    ],
  };
};

export const mapRules = new Map<
  string,
  Map<PokemonNamesEnum, PokemonBuffName>
>();
mapRules.set(
  AegislashBuffEnum.stanceForm,
  new Map([
    [
      PokemonNamesEnum.aegislash,
      {
        name: AegislashBuffEnum.stanceForm,
        options: [
          {
            name: 'sword',
            type: PokemonBuffTypesEnum.form,
          },
          {
            name: 'shield',
            type: PokemonBuffTypesEnum.form,
          },
        ],
      },
    ],
  ]),
);
mapRules.set(
  DecidueyeBuffEnum.boost,
  new Map([
    [
      PokemonNamesEnum.decidueye,
      {
        name: DecidueyeBuffEnum.boost,
        options: [
          {
            name: '0',
            type: PokemonBuffTypesEnum.stack,
          },
          {
            name: '1',
            type: PokemonBuffTypesEnum.stack,
          },
          {
            name: '2',
            type: PokemonBuffTypesEnum.stack,
          },
          {
            name: '3',
            type: PokemonBuffTypesEnum.stack,
          },
          {
            name: '4',
            type: PokemonBuffTypesEnum.stack,
          },
        ],
      },
    ],
  ]),
);
mapRules.set(
  CinderaceBuffEnum['blaze kick'],
  new Map([
    [
      PokemonNamesEnum.cinderace,
      {
        name: CinderaceBuffEnum['blaze kick'],
        options: [
          {
            name: 'false',
            type: PokemonBuffTypesEnum.default,
          },
          {
            name: 'true',
            type: PokemonBuffTypesEnum.default,
          },
          {
            name: 'with Plus',
            type: PokemonBuffTypesEnum.isPlus,
          },
        ],
      },
    ],
  ]),
);

export const getBuffNames = (pokemon: PokemonNamesEnum): PokemonBuffName[] => {
  const speedBuffsNames = pokemonsBuffsNamesMap.get(pokemon);
  console.log(`pokemon: ${pokemon}, buffs:${speedBuffsNames}`);
  if (!speedBuffsNames) {
    return [];
  }
  return speedBuffsNames.map((buffName: string) => {
    console.log('buff Name ', buffName);
    const moveRule = mapRules.get(buffName);
    console.log('move rule', moveRule);
    if (moveRule) {
      const pokemonRule = moveRule.get(pokemon);
      if (pokemonRule) {
        return pokemonRule;
      }
    }
    return createDefaultOptions(buffName);
  });
};
