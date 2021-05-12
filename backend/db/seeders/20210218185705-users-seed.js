'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      username: 'demo',
      email: 'demo@user.io',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'Demo',
      lastName: 'Lition',
    },
    {
      username: 'fakeuser1',
      email: faker.internet.email(),
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
      firstName: 'Fake',
      lastName: 'UserOne',
    },
    {
      username: 'fakeuser2',
      email: faker.internet.email(),
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
