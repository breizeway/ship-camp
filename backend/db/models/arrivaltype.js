'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArrivalType = sequelize.define('ArrivalType', {
    description: DataTypes.STRING
  }, {});
  ArrivalType.associate = function(models) {
    // associations can be defined here
  };
  return ArrivalType;
};