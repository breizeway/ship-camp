'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ArrivalTypes', [
      {
        description: 'Meet and Greet'
      },
      {
        description: 'Optional Meet and Greet'
      },
      {
        description: 'No Contact'
      },
      {
        description: 'Phone Call'
      },
      {
        description: 'Text'
      },
      {
        description: 'Email'
      },
      {
        description: 'Surprise Drop-In'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ArrivalTypes', null, {});
  }
};
