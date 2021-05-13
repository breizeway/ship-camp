'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    guests: DataTypes.INTEGER
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};
