import { IPlayGame } from './pokemons-dto';

export const mainGame = function async(PokemonA: IPlayGame, PokemonB: IPlayGame) {

  const levelA = PokemonA.level;
  const levelB = PokemonB.level;

  if (levelA === levelB) {

    const reference = Math.floor((Math.random() * 100) + 0);

    if (reference >= 0 && reference <= 49) {
      const result = {
        winner: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA + 1,
        },
        loser: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB - 1
        }
      }
      return result;
    }

    if (reference >= 50 && reference <= 100) {
      const result = {
        winner: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB + 1,
        },
        loser: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA - 1
        }
      }
      return result;
    }

  }

  if (levelA > levelB) {

    const reference = Math.floor((Math.random() * 100) + 0);

    if (reference >= 34 && reference <= 100) {
      const result = {
        winner: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA + 1,
        },
        loser: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB - 1
        }
      }
      return result;
    }

    if (reference >= 0 && reference <= 33) {
      const result = {
        winner: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB + 1,
        },
        loser: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA - 1
        }
      }
      return result;
    }

  } else {

    const reference = Math.floor((Math.random() * 100) + 0);

    if (reference >= 34 && reference <= 100) {
      const result = {
        winner: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB + 1,
        },
        loser: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA - 1
        }
      }
      return result;
    }

    if (reference >= 0 && reference <= 33) {
      const result = {
        winner: {
          id: PokemonA.id,
          kind: PokemonA.kind,
          coach: PokemonA.coach,
          level: levelA + 1,
        },
        loser: {
          id: PokemonB.id,
          kind: PokemonB.kind,
          coach: PokemonB.coach,
          level: levelB - 1
        }
      }
      return result;
    }

  }

}