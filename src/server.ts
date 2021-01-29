import { app } from './app'
import { sequelize } from '../src/infrastructure/orm/index'

const PORT = process.env.PORT || 5000;

  sequelize.authenticate()
  .then( async ()=> {
    console.log('Connected PostgreSQL database...')
    app.listen(PORT, () => console.log(`Server listening to the port: ${PORT}`));
  })
  .catch((error)=> {
    console.log('Connection PostgreSQL database failed:', error)
  })
  