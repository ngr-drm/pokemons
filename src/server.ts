import { app } from './app'
import { sequelize } from '../src/infrastructure/orm/index'
import fs from 'fs';
import https from 'https';

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(async () => {
    console.log('Connected PostgreSQL database...');
    
    https.createServer({
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    }, app)
      .listen(PORT, () => console.log(`Server listening to the port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection PostgreSQL database failed:', error)
  })
