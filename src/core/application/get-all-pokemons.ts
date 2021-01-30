import { IPokemonsRepository } from '../business/aggregate-root/pokemons-interface'
import { Request, Response } from 'express'

export class GetAllPokemons {

  constructor(
    private readonly repository: IPokemonsRepository
  ) { }

  execute = async (req: Request, res: Response): Promise<Response> => {

    try {

      const pokemon = await this.repository.getAllPokemons();
      return res.status(201).json({ message: 'Operação realizada com sucesso...', pokemon });

    } catch (error) {
      return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
    }
  }

}