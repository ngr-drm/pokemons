import { GamePokemons } from './game-pokemons'
import { GameRepository } from '../../domain/game-domain'

const postgres = new GameRepository();
const gamePokemons = new GamePokemons(postgres);

export { gamePokemons }