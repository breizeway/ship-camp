'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AccessTypes', [
      {
        description: 'Short Walk'
      },
      {
        description: 'Long Walk'
      },
      {
        description: 'Teleportation'
      },
      {
        description: 'Shuttle'
      },
      {
        description: 'Swimming'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AccessTypes', null, {});
  }
};
