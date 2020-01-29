const { Sequelize } = require('sequelize');
const { use_env_variable: DATABASE_URL } = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(process.env[DATABASE_URL]); // weird, I know.

const db = {
  Activity: sequelize.import('./Activity'),
  Journey: sequelize.import('./Journey'),
  MagicLink: sequelize.import('./MagicLink'),
  User: sequelize.import('./User'),
  sequelize,
  Sequelize
};

Object.values(db).forEach(model => model.associate && model.associate(db));

module.exports = db;
