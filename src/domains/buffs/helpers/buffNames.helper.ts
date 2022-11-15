import { PokemonNamesEnum } from 'src/infrastructure/enums/pokemonNames.enum';
import SpeedBuffMap from '../../../infrastructure/storage/pokemons/pokemonBuffMap.helper';
import { PokemonBuffName } from '../interfaces/pokemonBuffName.interface';
import { PokemonBuffTypesEnum } from '../enums/pokemonBuffTypes.enum';
import { AegislashBuffEnum } from '../../../infrastructure/storage/pokemons/aegislash/aegislashBuff.enum';
import { DecidueyeBuffEnum } from '../../../infrastructure/storage/pokemons/decidueye/decidueyeBuff.enum';
import { CinderaceBuffEnum } from '../../../infrastructure/storage/pokemons/cinderace/cinderaceBuff.enum';

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
export const expecitRulesPokemons = new Set([
  PokemonNamesEnum.cinderace,
  PokemonNamesEnum.aegislash,
  PokemonNamesEnum.decidueye,
]);

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
  const speedBuffs = SpeedBuffMap.get(pokemon);
  if (!speedBuffs) {
    return [];
  }
  const speedBuffsNames = Object.keys(speedBuffs);
  if (!expecitRulesPokemons.has(pokemon)) {
    return speedBuffsNames.map(createDefaultOptions);
  }
  return speedBuffsNames.map((buffName: string) => {
    const moveRule = mapRules.get(buffName);
    if (moveRule) {
      const pokemonRule = moveRule.get(pokemon);
      if (pokemonRule) {
        return pokemonRule;
      }
    }
    return createDefaultOptions(buffName);
  });
};
