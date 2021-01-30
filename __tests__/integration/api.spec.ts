import request from 'supertest'
import { app } from '../../src/app'

describe('Pokemons', () => {
  it('will integrate with the pokemons registration service', async () => {

    const response = await request(app)
      .post('/pokemons/')
      .send({
        tipo: 'pikachu',
        treinador: 'Jean Pita',
      });

    expect(response.status).toBe(201);

  });

});