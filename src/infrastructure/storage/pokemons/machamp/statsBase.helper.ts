/* eslint-disable */
import { PokemonStats } from "../../../../domains/attributes/interfaces/pokemonStats.interface";
import { getBlastoiseStats } from "../blastoise/statsBase.helper";

export const getMachampStats = (): PokemonStats[] => getBlastoiseStats();
