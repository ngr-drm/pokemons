
import { AddPokemons } from './add-pokemons'
import { UpdatePokemon } from './update-pokemon'
import { DeletePokemon } from './delete-pokemon'
import { GetPokemon } from './get-pokemon'
import { PokemonsRepository } from '../domain/pokemons-domain'

const postgres = new PokemonsRepository();
const addPokemons = new AddPokemons(postgres);
const updatePokemon = new UpdatePokemon(postgres);
const deletePokemon = new DeletePokemon(postgres);
const getPokemon = new GetPokemon(postgres);

export { 
  addPokemons, 
  updatePokemon, 
  deletePokemon,
  getPokemon 
}