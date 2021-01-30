import { IPokemonsRepository } from '../business/aggregate-root/pokemons-interface'
import { Request, Response } from 'express'

export class GetPokemon {

  constructor(
    private readonly repository: IPokemonsRepository
  ) { }

  execute = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    try {

      const pokemon = await this.repository.getPokemon(id);
      return res.status(201).json({ message: 'Operação realizada com sucesso...', pokemon });

    } catch (error) {
      return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
    }
  }

}