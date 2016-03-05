'use strict';

const ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = (sequelize, DataTypes) => {
  const {{x-singular-capitalize}} = sequelize.define('{{x-table}}', {
    /*
     * Set the table fields that you want for your model
     * Example:
     * username: DataTypes.STRING
     *
     * The "id", "created_at" and "updated_at" fields are automatically added >
     * > unless anything else is specified
     */
  }, {
    getterMethods: {
      /*
       * Set pseudo properties
       * These will not be stored in the table, but rendered in the JSON response
       * Example:
       * username_uppercased: function() { return this.getDataValue('username').toUpperCase(); }
       */
    },

    classMethods: {
      associate: (models) => {
        /*
         * Define relationships with other models
         * Example:
         * models.user.hasOne(models.project);
         */
      }
    },

    underscored: true,
    underscoredAll: true

    /* Find more configurations at:
     * http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
     */
  });

  ssaclAttributeRoles({{x-singular-capitalize}});

  return {{x-singular-capitalize}};
};
