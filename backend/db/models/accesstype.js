'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessType = sequelize.define('AccessType', {
    description: DataTypes.STRING
  }, {});
  AccessType.associate = function(models) {
    // associations can be defined here
  };
  return AccessType;
};