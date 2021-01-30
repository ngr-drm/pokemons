import { Router } from 'express'
import { gamePokemons } from '../core/application/game/main'

const gameRoutes = Router();

gameRoutes.post('/batalhar/:pokemonAId/:pokemonBId', gamePokemons.execute);


export { gameRoutes };