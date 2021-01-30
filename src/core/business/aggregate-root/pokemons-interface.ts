import { Pokemons } from '../../../infrastructure/postgres/entities/pokemons'
import { IPokemonsDTO } from '../value-object/pokemons-dto'

export interface IPokemonsRepository {

  addPokemons(data: IPokemonsDTO): Promise<Pokemons | false>
  updadePokemon(id: string, data: IPokemonsDTO): Promise<[number, Pokemons[]]>
  deletePokemon(id: string): Promise<number>
  getPokemon(id: string): Promise<Pokemons | null>
  getAllPokemons(): Promise<Pokemons[]>

}