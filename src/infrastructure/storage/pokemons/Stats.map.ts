import { PokemonStats } from '../../../domains/attributes/interfaces/pokemonStats.interface';
import { PokemonNamesEnum } from '../../enums/pokemonNames.enum';
import { getGreninjaStats } from './greninja/statsBase.helper';
import { getAbsolStats } from './absol/statsBase.helper';
import { getBuzzWoleStats } from './buzzwole/statsBase.helper';
import { getMrmimeStats } from './mr.mime/statsBase.helper';
import { getAegislashStats } from './aegislash/statsBase.helper';
import { getAzumarillStats } from './azumarill/statsBase.helper';
import { getBlastoiseStats } from './blastoise/statsBase.helper';
import { getMamoswineStats } from './mamoswine/statsBase.helper';
import { getMachampStats } from './machamp/statsBase.helper';
import { getTyranitarStats } from './tyranitar/statsBase.helper';
import { getBlisseyStats } from './blissey/statsBase.helper';
import { getEldegossStats } from './eldegoss/statsBase.helper';
import { getWigglytuffStats } from './wigglytuff/statsBase.helper';
import { getDecidueyeStats } from './decidueye/statsBase.helper';
import { getCinderaceStats } from './cinderace/statsBase.helper';
import { getCramorantStats } from './cramorant/statsBase.helper';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());
PokemonStatsMap.set(PokemonNamesEnum.greninja, getGreninjaStats());
PokemonStatsMap.set(PokemonNamesEnum.absol, getAbsolStats());
PokemonStatsMap.set(PokemonNamesEnum.buzzwole, getBuzzWoleStats());
PokemonStatsMap.set(PokemonNamesEnum['mr.mime'], getMrmimeStats());
PokemonStatsMap.set(PokemonNamesEnum.aegislash, getAegislashStats());
PokemonStatsMap.set(PokemonNamesEnum.azumarill, getAzumarillStats());
PokemonStatsMap.set(PokemonNamesEnum.blastoise, getBlastoiseStats());
PokemonStatsMap.set(PokemonNamesEnum.mamoswine, getMamoswineStats());
PokemonStatsMap.set(PokemonNamesEnum.machamp, getMachampStats());
PokemonStatsMap.set(PokemonNamesEnum.tyranitar, getTyranitarStats());
PokemonStatsMap.set(PokemonNamesEnum.blissey, getBlisseyStats());
PokemonStatsMap.set(PokemonNamesEnum.eldegoss, getEldegossStats());
PokemonStatsMap.set(PokemonNamesEnum.wigglytuff, getWigglytuffStats());
PokemonStatsMap.set(PokemonNamesEnum.cinderace, getCinderaceStats());
PokemonStatsMap.set(PokemonNamesEnum.cramorant, getCramorantStats());

export default PokemonStatsMap;
