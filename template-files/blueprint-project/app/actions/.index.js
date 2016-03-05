'use strict';

const fs = require('fs');
const path = require('path');
const inflect = require('inflect');
const basename = path.basename(module.filename);
const controls = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
  .forEach(function(file) {
    const baseName = path.basename(file, '.js');
    const underscoreName = inflect.underscore(baseName);
    controls[underscoreName] = require(`./${file}`);
  });

module.exports = controls;