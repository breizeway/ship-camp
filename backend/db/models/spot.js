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
    checkIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 23
      },
    },
    checkOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 23
      },
    },
    minStay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 12
      }
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
    Spot.belongsTo(models.User, {foreignKey: 'hostId', as: 'Host'});
    Spot.hasMany(models.Photo, {foreignKey: 'spotId'})
    Spot.hasMany(models.Review, {foreignKey: 'spotId'})
    //Spot.hasMany(models.SpotAmenity, {foreignKey: 'spotId'})
    const amenityColumnMapping = {
      through: 'SpotAmenity',
      foreignKey: 'spotId',
      otherKey: 'amenityId'
    }
    Spot.belongsToMany(models.Amenity, amenityColumnMapping);
    const bookingColumnMapping = {
      through: 'Booking',
      foreignKey: 'spotId',
      otherKey: 'userId',
      as: 'Bookings'
    }
    Spot.belongsToMany(models.User, bookingColumnMapping);
  };
  return Spot;
};
