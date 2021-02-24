'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelterType = sequelize.define('ShelterType', {
    description: DataTypes.STRING
  }, {});
  ShelterType.associate = function(models) {
    // associations can be defined here
  };
  return ShelterType;
};