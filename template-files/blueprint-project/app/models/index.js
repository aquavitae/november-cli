'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const inflect = require('inflect');
const ssaclAttributeRoles = require('ssacl-attribute-roles');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const db = {};
const sequelize;

// Create database connection
if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Attribute whitelisting/blacklisting
ssaclAttributeRoles(sequelize);

// Import models
fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename))
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    const underscoreModel = inflect.singularize(inflect.underscore(model.name));
    db[underscoreModel] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
