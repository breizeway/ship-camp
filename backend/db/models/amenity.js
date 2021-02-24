'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
  };
  return Amenity;
};
