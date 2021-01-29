import { Router } from 'express'
import { addPokemons } from '../core/application/main'

const pokemonsRoutes = Router();

pokemonsRoutes.post('/pokemons', addPokemons.execute);


export { pokemonsRoutes };