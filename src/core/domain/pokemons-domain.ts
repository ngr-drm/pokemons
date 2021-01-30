import { IPokemonsRepository } from '../business/aggregate-root/pokemons-interface'
import { IPokemonsDTO } from '../business/value-object/pokemons-dto'
import { Pokemons } from '../../infrastructure/postgres/entities/pokemons'

export class PokemonsRepository implements IPokemonsRepository {

  public async addPokemons(data: IPokemonsDTO) {
    try {
      // Enforce to the standard format
      data.tipo = data.tipo.toLowerCase();
      return await Pokemons.create({ ...data, nivel: 1 });
    }
    catch (error) { throw error; }
  }

  public async updadePokemon(id: string, data: IPokemonsDTO) {
    try {
      return await Pokemons.update({ ...data }, { where: { id: id } });
    }
    catch (error) { throw error; }
  }

  public async deletePokemon(id: string) {
    try {
      return await Pokemons.destroy( { where: { id: id } });
    }
    catch (error) { throw error; }
  }

  public async getPokemon(id: string) {
    try {
      return await Pokemons.findOne( { where: { id: id } });
    }
    catch (error) { throw error; }
  }


}