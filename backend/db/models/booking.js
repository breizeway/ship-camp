'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    user_id: DataTypes.INTEGER,
    spot_id: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};