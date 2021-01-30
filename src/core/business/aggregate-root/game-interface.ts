import { IGameWinner, IGameLoser } from '../value-object/pokemons-dto';


export interface IGameRepository {

  battle(pokemonAId: string, pokemonBId: string): Promise<IGameWinner | IGameLoser>

}