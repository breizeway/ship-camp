'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

const randBool = percentage => {
  const randNum = Math.floor(Math.random() * 100);
  if (percentage < 1) return false;
  if (percentage >= 100) return true;
  if (randNum < percentage) return true;
  if (randNum >= percentage) return false;
}

const spotsMax = 4;
const usersMin = 8;
const usersMax = 50;

const fakeReviews = (numReviews) => {
  const usersArray = [];

  for (let i = 1; i <= numReviews; i++) {
    const userObj = {};
    userObj.text = faker.lorem.paragraph();
    userObj.recommended = randBool(90);
    userObj.spotId = faker.random.number({min: 1, max: spotsMax})
    userObj.userId = faker.random.number({min: usersMin, max: usersMax})
    usersArray.push(userObj);
  }
  return usersArray;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', fakeReviews(50), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
