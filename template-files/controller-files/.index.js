'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const controls = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename))
  .forEach(file => {
    const baseName = path.basename(file, '.js');
    controls[baseName] = require('./' + file);
  });

module.exports = controls;
