'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessType = sequelize.define('AccessType', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
  }, {});
  AccessType.associate = function(models) {
    // associations can be defined here
  };
  return AccessType;
};
