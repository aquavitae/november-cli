'use strict';

module.exports = (req, res, render) => {
  const query = {
    where: {
      id: req.params.{{x-singular-underscore}}_id,
    },
  };

  req.models.{{x-singular-underscore}}.find(query)
    .then({{x-singular-camelcase}} => {

      /*
       * Set new values like this:
       * {{x-singular}}.some_field_name = req.body.{{x-singular}}.someFieldName;
       */

      return {{x-singular-camelcase}}.save();
    })
    .then(render)
    .catch(render);
};