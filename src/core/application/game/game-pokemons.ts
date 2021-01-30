import { IGameRepository } from '../../business/aggregate-root/game-interface'
import { Request, Response } from 'express'

export class GamePokemons {

  constructor(
    private readonly repository: IGameRepository
  ) { }

  execute = async (req: Request, res: Response): Promise<Response> => {

    const { pokemonAId, pokemonBId } = req.params;

    try {
      const result = await this.repository.battle(pokemonAId, pokemonBId);
      return res.status(201).json({ message: 'Resuldado da Batalha:', result });

    } catch (error) {
      return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
    }
  }

}