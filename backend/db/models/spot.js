'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10000
      },
    },
    checkIn: DataTypes.TIME,
    checkOut: DataTypes.TIME,
    minStay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      },
    },
    bookingPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      },
    },
    maxGuests: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      },
    },
    shelterIsProvided: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    shelterTypeId: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      },
    },
    cancellationPolicyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    arrivalTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    accessTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
    },
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.ShelterType, {foreignKey: 'shelterTypeId'});
    Spot.belongsTo(models.CancellationPolicy, {foreignKey: 'cancellationPolicyId'});
    Spot.belongsTo(models.ArrivalType, {foreignKey: 'arrivalTypeId'});
    Spot.belongsTo(models.AccessType, {foreignKey: 'accessTypeId'});
    Spot.belongsTo(models.User, {foreignKey: 'hostId'});
  };
  return Spot;
};
