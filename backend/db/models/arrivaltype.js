'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArrivalType = sequelize.define('ArrivalType', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
  }, {});
  ArrivalType.associate = function(models) {
    // associations can be defined here
  };
  return ArrivalType;
};
