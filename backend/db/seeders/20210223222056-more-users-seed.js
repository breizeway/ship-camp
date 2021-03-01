'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

const profileImages = require('../seed-data/profile-images');

const fakeUsers = (numUsers) => {
  const usersArray = [];
  for (let i = 1; i <= numUsers; i++) {
    const userObj = {};
    userObj.lastName = faker.name.lastName();
    userObj.firstName = faker.name.firstName();
    userObj.username = `${userObj.firstName}_${userObj.lastName}`;
    userObj.hashedPassword = bcrypt.hashSync(faker.internet.password());
    userObj.email = `${userObj.firstName}_${userObj.lastName}@${faker.internet.domainName()}`;
    userObj.profileImageUrl = profileImages[Math.floor(Math.random() * profileImages.length)];
    usersArray.push(userObj);
  }
  return usersArray;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', fakeUsers(44), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
