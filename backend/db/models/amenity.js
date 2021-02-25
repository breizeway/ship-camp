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
    // Amenity.hasMany(models.SpotAmenity, {foreignKey: 'amenityId'})
    const columnMapping = {
      through: 'SpotAmenity',
      foreignKey: 'amenityId',
      otherKey: 'spotId'
    }
    Amenity.belongsToMany(models.Spot, columnMapping);
  };
  return Amenity;
};
