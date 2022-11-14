import { PokemonStats } from '../../../domains/attributes/interfaces/pokemonStats.interface';
import { getDecidueyeStats } from './decidueye/statsBase.helper';
import { PokemonNamesEnum } from '../../enums/pokemonNames.enum';
import { getGreninjaStats } from './greninja/statsBase.helper';
import { getAbsolStats } from './absol/statsBase.helper';
import { getBuzzWoleStats } from './buzzwole/statsBase.helper';
import { getMrmimeStats } from './mr.mime/statsBase.helper';
import { getAegislashStats } from './aegislash/statsBase.helper';
import { getAzumarillStats } from './azumarill/statsBase.helper';
import { getBlastoiseStats } from './blastoise/statsBase.helper';
import { getMamoswineSpeed } from './mamoswine/statsBase.helper';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());
PokemonStatsMap.set(PokemonNamesEnum.greninja, getGreninjaStats());
PokemonStatsMap.set(PokemonNamesEnum.absol, getAbsolStats());
PokemonStatsMap.set(PokemonNamesEnum.buzzwole, getBuzzWoleStats());
PokemonStatsMap.set(PokemonNamesEnum['mr.mime'], getMrmimeStats());
PokemonStatsMap.set(PokemonNamesEnum.aegislash, getAegislashStats());
PokemonStatsMap.set(PokemonNamesEnum.azumarill, getAzumarillStats());
PokemonStatsMap.set(PokemonNamesEnum.blastoise, getBlastoiseStats());
PokemonStatsMap.set(PokemonNamesEnum.mamoswine, getMamoswineSpeed());

export default PokemonStatsMap;
