'use strict';
const faker = require('faker');

const reviewText = require('../seed-data/review-text')

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
  const reviewsArray = [];

  for (let i = 1; i <= numReviews; i++) {
    const reviewObj = {};
    reviewObj.text = reviewText[Math.floor(Math.random() * reviewText.length)];
    reviewObj.recommended = randBool(90);
    reviewObj.spotId = faker.random.number({min: 1, max: spotsMax});
    reviewObj.userId = faker.random.number({min: usersMin, max: usersMax});
    reviewObj.createdAt = new Date(faker.date.past(5));
    reviewsArray.push(reviewObj);
  }
  return reviewsArray;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', fakeReviews(30), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
