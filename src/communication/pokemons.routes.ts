import { Router } from 'express'
import { addPokemons } from '../core/application/main'
import { updatePokemon } from '../core/application/main'

const pokemonsRoutes = Router();

pokemonsRoutes.post('/pokemons', addPokemons.execute);
pokemonsRoutes.put('/pokemons/:id', updatePokemon.execute);


export { pokemonsRoutes };