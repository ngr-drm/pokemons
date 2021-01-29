import { Model, DataTypes} from 'sequelize'
import { sequelize } from '../../orm/index'
import { v4 as uuid } from 'uuid'

export class Pokemons extends Model {
	public id!: string;
	public tipo!: string;
  public treinador!: string;
  public nivel!: string;
}

Pokemons.init(
	{
		tipo: DataTypes.STRING,
    treinador: DataTypes.STRING,
    nivel: DataTypes.STRING,
	},
	{
		hooks: {
			beforeCreate: async (pokemon) => {
				pokemon.id = uuid();
			}

		},
		tableName: 'pokemons',
		sequelize,
	}
);

