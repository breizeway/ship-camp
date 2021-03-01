'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ShelterTypes', [
      {
        description: 'Private Cabin'
      },
      {
        description: 'Shared Cabin'
      },
      {
        description: 'Covered Deck'
      },
      {
        description: 'Uncovered Deck'
      },
      {
        description: 'None'
      },
      {
        description: 'Tent'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ShelterTypes', null, {});
  }
};
