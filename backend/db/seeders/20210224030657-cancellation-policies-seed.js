'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CancellationPolicies', [
        {
          description: 'Not Allowed'
        },
        {
          description: 'Relaxed'
        },
        {
          description: 'Moderate'
        },
        {
          description: 'Strict'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CancellationPolicies', null, {});
  }
};
