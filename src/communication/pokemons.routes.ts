import { Router } from 'express'
import { addPokemons } from '../core/application/main'
import { updatePokemon } from '../core/application/main'
import { deletePokemon } from '../core/application/main'
import { getPokemon } from '../core/application/main'
import { getAllPokemons } from '../core/application/main'


const pokemonsRoutes = Router();

pokemonsRoutes.post('/pokemons', addPokemons.execute);
pokemonsRoutes.put('/pokemons/:id', updatePokemon.execute);
pokemonsRoutes.delete('/pokemons/:id', deletePokemon.execute);
pokemonsRoutes.get('/pokemons/:id', getPokemon.execute);
pokemonsRoutes.get('/pokemons', getAllPokemons.execute);

export { pokemonsRoutes };