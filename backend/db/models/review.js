'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [4, 2000]
      },
    },
    recommended: DataTypes.BOOLEAN,
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, {foreignKey: 'spotId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};
