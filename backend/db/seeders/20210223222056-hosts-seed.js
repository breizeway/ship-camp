'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'flying_dutchman',
        email: 'flyingdutchman@bikinibottom.net',
        hashedPassword: bcrypt.hashSync('ivecomeforyourpickle'),
        firstName: 'Flying',
        lastName: 'Dutchman',
        profileImageUrl: 'https://ship-camp.s3.us-west-002.backblazeb2.com/hosts/flying-dutchman.jpg',
        isHost: true
      },
      {
        username: 'bermut_nundaloy',
        email: 'nermutbundaloy@opeations.space',
        hashedPassword: bcrypt.hashSync('TEENMOM'),
        firstName: 'Nermut',
        lastName: 'Bundaloy',
        profileImageUrl: 'https://ship-camp.s3.us-west-002.backblazeb2.com/hosts/nermut-bundaloy.jpg',
        isHost: true
      },
      {
        username: 'white_star_line',
        email: 'whitestarline@unsinkable.com',
        hashedPassword: bcrypt.hashSync('iceberg'),
        firstName: 'White',
        lastName: 'Star Line',
        profileImageUrl: 'https://ship-camp.s3.us-west-002.backblazeb2.com/hosts/white-star-line.png',
        isHost: true
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
