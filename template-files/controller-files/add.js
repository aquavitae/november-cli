'use strict';

module.exports = (req, res, render) => {
  req.models.{{x-singular-underscore}}
    .create(req.body.{{x-singular-camelcase}})
    .then(render)
    .catch(render);
};
