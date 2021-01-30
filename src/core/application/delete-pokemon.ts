import { IPokemonsRepository } from '../business/aggregate-root/pokemons-interface'
import { Request, Response } from 'express'

export class DeletePokemon {

  constructor(
    private readonly repository: IPokemonsRepository
  ) { }

  execute = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    try {

      await this.repository.deletePokemon(id);
      return res.status(204).send();

    } catch (error) {
      return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
    }
  }

}