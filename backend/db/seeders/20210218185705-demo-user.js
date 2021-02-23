'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'Demo',
      lastName: 'Lition',
    },
    {
      email: faker.internet.email(),
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
      firstName: 'Fake',
      lastName: 'UserOne',
    },
    {
      email: faker.internet.email(),
      username: 'FakeUser2',
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
      firstName: 'Fake',
      lastName: 'UserTwo',
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
