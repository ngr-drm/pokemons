import { Router } from 'express'
import { pokemonsRoutes } from './pokemons.routes'

const routes = Router();

routes.use(pokemonsRoutes);

export { routes } 