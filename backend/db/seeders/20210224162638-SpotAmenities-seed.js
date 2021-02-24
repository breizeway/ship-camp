'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SpotAmenities', [
      {
        spotId: 1,
        amenityId: 6,
        available: true,
      },
      {
        spotId: 1,
        amenityId: 7,
        available: true,
      },
      {
        spotId: 1,
        amenityId: 1,
        available: false,
      },
      {
        spotId: 2,
        amenityId: 1,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 2,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 3,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 5,
        available: false,
      },
      {
        spotId: 2,
        amenityId: 6,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 7,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 8,
        available: true,
      },
      {
        spotId: 2,
        amenityId: 9,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 1,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 2,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 3,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 4,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 5,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 6,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 7,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 8,
        available: true,
      },
      {
        spotId: 3,
        amenityId: 9,
        available: true,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SpotAmenities', null, {});
  }
};
