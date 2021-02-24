'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShelterType = sequelize.define('ShelterType', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
  }, {});
  ShelterType.associate = function(models) {
    // associations can be defined here
  };
  return ShelterType;
};
