'use strict';
module.exports = (sequelize, DataTypes) => {
  const CancellationPolicy = sequelize.define('CancellationPolicy', {
    description: DataTypes.STRING
  }, {});
  CancellationPolicy.associate = function(models) {
    // associations can be defined here
  };
  return CancellationPolicy;
};