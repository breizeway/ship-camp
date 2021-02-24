'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.Spot, {foreignKey: 'spotId'});
  };
  return Photo;
};
