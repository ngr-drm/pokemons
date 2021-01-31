import { Router } from 'express'
import { gameRoutes } from './game.routes'
import { pokemonsRoutes } from './pokemons.routes'

const routes = Router();

routes.use(pokemonsRoutes);
routes.use(gameRoutes);

export { routes } 