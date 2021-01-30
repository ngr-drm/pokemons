import { IPokemonsRepository } from '../../business/aggregate-root/pokemons-interface'
import { Request, Response } from 'express'

export class AddPokemons {

	constructor(
		private readonly repository: IPokemonsRepository
	) { }

	execute = async (req: Request, res: Response): Promise<Response> => {

		const data = req.body;
		try {

			if ((data.tipo === 'pikachu' || data.tipo === 'charizard' || data.tipo === 'mewtwo') && data.treinador){
				const pokemon = await this.repository.addPokemons(data);
				return res.status(201).json({ message: 'Operação realizada com sucesso...', pokemon });
			} 
			
			return res.status(401).json({ message: 'Erro: Dados de registro inválidos.'});

		} catch (error) {
			return res.status(401).json({ message: 'Erro: consulte administração...', details: error.message });
		}
	}

}