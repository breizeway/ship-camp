'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Amenities', [
      {
        description: 'Potable water'
      },
      {
        description: 'Kitchen'
      },
      {
        description: 'Showers'
      },
      {
        description: 'Picnic table'
      },
      {
        description: 'Wifi'
      },
      {
        description: 'Bins'
      },
      {
        description: 'Toilet'
      },
      {
        description: 'Laundry'
      },
      {
        description: 'Storage'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
