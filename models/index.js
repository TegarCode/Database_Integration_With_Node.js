const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const { dialect } = require('../config/db.config');

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        define: {
            timestamps: false,
            freezeTableName: true

        },
        logging: false
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModel = require('./devices.model')(sequelize, Sequelize);

module.exports = db;