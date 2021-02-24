'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotAmenity = sequelize.define('SpotAmenity', {
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    amenityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    available: DataTypes.BOOLEAN
  }, {});
  SpotAmenity.associate = function(models) {
    SpotAmenity.belongsTo(models.Spot, {foreignKey: 'spotId'});
    SpotAmenity.belongsTo(models.Amenity, {foreignKey: 'amenityId'});
  };
  return SpotAmenity;
};
