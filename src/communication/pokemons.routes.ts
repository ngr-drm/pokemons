import { Router } from 'express'
import { addPokemons } from '../core/application/pokemons/main'
import { updatePokemon } from '../core/application/pokemons/main'
import { deletePokemon } from '../core/application/pokemons/main'
import { getPokemon } from '../core/application/pokemons/main'
import { getAllPokemons } from '../core/application/pokemons/main'


const pokemonsRoutes = Router();

pokemonsRoutes.post('/pokemons', addPokemons.execute);
pokemonsRoutes.put('/pokemons/:id', updatePokemon.execute);
pokemonsRoutes.delete('/pokemons/:id', deletePokemon.execute);
pokemonsRoutes.get('/pokemons/:id', getPokemon.execute);
pokemonsRoutes.get('/pokemons', getAllPokemons.execute);

export { pokemonsRoutes };