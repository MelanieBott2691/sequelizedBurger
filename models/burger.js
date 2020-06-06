
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
  });
  return burger
  };
  