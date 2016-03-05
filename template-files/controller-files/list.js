'use strict';

module.exports = (req, res, render) => {
  req.models.{{x-singular-underscore}}
    .findAll()
    .then(render);
    .catch(render);
};