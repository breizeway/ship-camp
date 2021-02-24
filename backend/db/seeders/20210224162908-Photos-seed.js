'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/flying-dutchman-ship-1.png',
        spotId: 1,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/flying-dutchman-ship-2.jpg',
        spotId: 1,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/flying-dutchman-ship-3.jpg',
        spotId: 1,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/bargie-1.jpg',
        spotId: 2,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/bargie-2.png',
        spotId: 2,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/bargie-3.jpg',
        spotId: 2,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/titanic-1.jpeg',
        spotId: 3,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/titanic-2.jpg',
        spotId: 3,
      },
      {
        url: 'https://ship-camp.s3.us-west-002.backblazeb2.com/spots/titanic-3.jpg',
        spotId: 3,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
