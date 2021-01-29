
import { AddPokemons } from './add-pokemons'
import { PokemonsRepository } from '../domain/pokemons-domain'

const postgres = new PokemonsRepository();
const addPokemons = new AddPokemons(postgres);


export { addPokemons}