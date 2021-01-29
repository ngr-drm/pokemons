import { Sequelize } from 'sequelize'
const config = require('./sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
		dialect: config.dialect,
		host: config.host
});

export { sequelize }
