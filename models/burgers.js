'use strict';
module.exports = function (sequelize, DataTypes) {
  var burgers = sequelize.define(
    'burgers',
    {
      bruger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN,
      devourerId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function (models) {
          burgers.hasOne(models.devourers);
        }
      }
    }
  );
  return burgers;
};
