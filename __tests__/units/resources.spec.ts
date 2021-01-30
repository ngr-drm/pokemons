import { IPlayGame } from '../../src/core/business/value-object/pokemons-dto'
import { jest } from '@jest/globals'

describe('Validations', () => {
  it('will check if the Pokemon type is valid', async () => {

    const reference = 'Pikachu';
    const kind = {
      pikachu: 'pikachu',
      charizard: 'charizard',
      mewtwo: 'mewtwo',
    }

    // Enforce to the standard format
    const result = reference.toLowerCase();
    expect(kind.pikachu).toStrictEqual(result);

  });

  it('will test the battle algorithm for pokemons of equal levels.', async () => {

    const algorithm = function (PokemonA: IPlayGame, PokemonB: IPlayGame) {

      const levelA = PokemonA.level;
      const levelB = PokemonB.level;

      if (levelA === levelB) {

        const reference = Math.floor((Math.random() * 100) + 0);

        if (reference >= 0 && reference <= 49) {
          const result = {
            winner: PokemonA.id,
            winnerLevel: levelA + 1,
            loser: PokemonB.id,
            loserLevel: levelB - 1
          }
          console.log(result);
          return result;
        }

        if (reference >= 50 && reference <= 100) {
          const result = {
            winner: PokemonB.id,
            winnerLevel: levelB + 1,
            loser: PokemonA.id,
            loserLevel: levelA - 1
          }
          console.log(result);
          return result;
        }

      }
    }

    const PokemonA: IPlayGame = { id: 'A', level: 1 }
    const PokemonB: IPlayGame = { id: 'B', level: 1 }
    const myMockFn = jest.fn(algorithm);
    myMockFn(PokemonA, PokemonB);

  });

  it('will test the battle algorithm for pokemons of different levels.', async () => {

    const algorithm = function (PokemonA: IPlayGame, PokemonB: IPlayGame) {

      const levelA = PokemonA.level;
      const levelB = PokemonB.level;

      if (levelA > levelB) {

        const reference = Math.floor((Math.random() * 100) + 0);

        if (reference >= 34 && reference <= 100) {
          const result = {
            winner: PokemonA.id,
            winnerLevel: levelA + 1,
            loser: PokemonB.id,
            loserLevel: levelB - 1
          }
          console.log(result);
          return result;
        }

        if (reference >= 0 && reference <= 33) {
          const result = {
            winner: PokemonB.id,
            winnerLevel: levelB + 1,
            loser: PokemonA.id,
            loserLevel: levelA - 1
          }
          console.log(result);
          return result;
        }

      } else {

        const reference = Math.floor((Math.random() * 100) + 0);

        if (reference >= 34 && reference <= 100) {
          const result = {
            winner: PokemonB.id,
            winnerLevel: levelB + 1,
            loser: PokemonA.id,
            loserLevel: levelA - 1
          }
          console.log(result);
          return result;
        }

        if (reference >= 0 && reference <= 33) {
          const result = {
            winner: PokemonA.id,
            winnerLevel: levelA + 1,
            loser: PokemonB.id,
            loserLevel: levelB - 1
          }
          console.log(result);
          return result;
        }

      }


    }

    const PokemonA: IPlayGame = { id: 'A', level: 2 }
    const PokemonB: IPlayGame = { id: 'B', level: 1 }
    const myMockFn = jest.fn(algorithm);
    myMockFn(PokemonA, PokemonB);

  });

});