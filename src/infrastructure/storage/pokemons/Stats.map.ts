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
import { getAlolaNinetalesStats } from './alola ninetales/statsBase.helper';
import { getSlowbroStats } from './slowbro/statsBase.helper';
import { getDelphoxStats } from './delphox/statsBase.helper';
import { getEspeonStats } from './espeon/statsBase.helper';
import { getGardevoirStats } from './gardevoir/statsBase.helper';
import { getPikachuStats } from './pikachu/statsBase.helper';
import { getDuraludonStats } from './duraludon/statsBase.helper';
import { getVenusaurStats } from './venusaur/statsBase.helper';
import { getTalonflameStats } from './talonflame/statsBase.helper';
import { getHoopaStats } from './hoopa/statsBase.helper';
import { getLucarioStats } from './lucario/statsBase.helper';
import { getSnorlaxStats } from './snorlax/statsBase.helper';
import { getDodrioStats } from './dodrio/statsBase.helper';
import { getScizorStats } from './scizor/statsBase.helper';
import { getScytherStats } from './scyther/statsBase.helper';
import { getTrevenantStats } from './trevenant/statsBase.helper';
import { getZoroarkStats } from './zoroark/statsBase.helper';
import { getGengarStats } from './gengar/statsBase.helper';

const PokemonStatsMap = new Map<PokemonNamesEnum, PokemonStats[]>();

PokemonStatsMap.set(PokemonNamesEnum.decidueye, getDecidueyeStats());
PokemonStatsMap.set(PokemonNamesEnum.alolaNinetales, getAlolaNinetalesStats());
PokemonStatsMap.set(PokemonNamesEnum.greninja, getGreninjaStats());
PokemonStatsMap.set(PokemonNamesEnum.absol, getAbsolStats());
PokemonStatsMap.set(PokemonNamesEnum.delphox, getDelphoxStats());
PokemonStatsMap.set(PokemonNamesEnum.slowbro, getSlowbroStats());
PokemonStatsMap.set(PokemonNamesEnum.espeon, getEspeonStats());
PokemonStatsMap.set(PokemonNamesEnum.gardevoir, getGardevoirStats());
PokemonStatsMap.set(PokemonNamesEnum.pikachu, getPikachuStats());
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
PokemonStatsMap.set(PokemonNamesEnum.duraludon, getDuraludonStats());
PokemonStatsMap.set(PokemonNamesEnum.venusaur, getVenusaurStats());
PokemonStatsMap.set(PokemonNamesEnum.talonflame, getTalonflameStats());
PokemonStatsMap.set(PokemonNamesEnum.hoopa, getHoopaStats());
PokemonStatsMap.set(PokemonNamesEnum.lucario, getLucarioStats());
PokemonStatsMap.set(PokemonNamesEnum.snorlax, getSnorlaxStats());
PokemonStatsMap.set(PokemonNamesEnum.dodrio, getDodrioStats());
PokemonStatsMap.set(PokemonNamesEnum.greedent, getDodrioStats());
PokemonStatsMap.set(PokemonNamesEnum.scizor, getScizorStats());
PokemonStatsMap.set(PokemonNamesEnum.scyther, getScytherStats());
PokemonStatsMap.set(PokemonNamesEnum.trevenant, getTrevenantStats());
PokemonStatsMap.set(PokemonNamesEnum.zoroark, getZoroarkStats());
PokemonStatsMap.set(PokemonNamesEnum.gengar, getGengarStats());

export default PokemonStatsMap;
