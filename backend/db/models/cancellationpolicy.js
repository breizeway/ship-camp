'use strict';
module.exports = (sequelize, DataTypes) => {
  const CancellationPolicy = sequelize.define('CancellationPolicy', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
  }, {});
  CancellationPolicy.associate = function(models) {
    // associations can be defined here
  };
  return CancellationPolicy;
};
