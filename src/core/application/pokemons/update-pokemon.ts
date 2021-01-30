import { IPokemonsRepository } from '../../business/aggregate-root/pokemons-interface'
import { Request, Response } from 'express'

export class UpdatePokemon {

  constructor(
    private readonly repository: IPokemonsRepository
  ) { }

  execute = async (req: Request, res: Response): Promise<Response> => {

    const data = req.body;
    const { id } = req.params;
    try {

      await this.repository.updadePokemon(id, data);
      return res.status(204).send();

    } catch (error) {
      return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
    }
  }

}