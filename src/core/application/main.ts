
import { AddPokemons } from './add-pokemons'
import { UpdatePokemon } from './update.pokemon'
import { PokemonsRepository } from '../domain/pokemons-domain'

const postgres = new PokemonsRepository();
const addPokemons = new AddPokemons(postgres);
const updatePokemon = new UpdatePokemon(postgres);

export { addPokemons, updatePokemon }