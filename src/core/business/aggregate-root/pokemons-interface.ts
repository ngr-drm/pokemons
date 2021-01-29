import { Pokemons } from '../../../infrastructure/postgres/entities/pokemons'
import { IPokemonsDTO } from '../value-object/pokemons-dto'

export interface IPokemonsRepository {

  addPokemons(data: IPokemonsDTO): Promise<Pokemons | false>

}