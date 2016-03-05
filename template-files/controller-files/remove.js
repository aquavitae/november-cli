'use strict';

module.exports = (req, res, render) => {
  const query = {
    where: {
      id: req.params.{{x-singular-underscore}}_id,
    },
  };

  req.models.{{x-singular-underscore}}.find(query)
    .then({{x-singular-camelcase}} => {{x-singular-camelcase}}.destroy());
    .then(() => res.json({}))
    .catch(render);
};