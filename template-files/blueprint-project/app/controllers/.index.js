'use strict';

const fs = require('fs');
const path = require('path');
const inflect = require('inflect');
const basename = path.basename(module.filename);
const models = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
  .forEach(function(file) {
    const underscore = inflect.singularize(inflect.underscore(file));
    models[underscore] = require(`./${file}/.index.js`);
  });

module.exports = models;