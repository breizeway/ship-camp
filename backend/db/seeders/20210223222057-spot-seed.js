'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [

      {
        name: 'The Flying Dutchman\'s ship',
        description: 'Camp aboard me ship if you dare! This old girl is good and scary. Well not good AND scary at the same time--just *good and scary*--you know, mold growing on the ceilings, bugs in the sink. Highlights of your stay may include: swabbing decks, your very own private perfume department to browse, and learning how to tie your shoes. Take home complimentary plastic doubloons to remember your stay.',
        price: 80,
        checkIn: '15:00',
        checkOut: '11:00',
        cancellationPolicy: 1,
        onArrival: 1,
        minStay: 2,
        bookingPeriod: 12,
        maxGuests: 4,
        walk: 1,
        shelterIsProvided: true,
        shelterType: 1,
        hostId: 4,
      },
      {
        name: 'The Bargarean Jade',
        description: '"Ship of the stars!" Book a stay aboard the Bargarean Jade. The Bargarean Jade, aka "Bargie is a sentient spaceship with a storied past. Once a famous actress, she was known throughout Hollowood for her beauty and acting prowess. Now, she helps run ambassadorial missions with her crew and is looking for some spare croon. Meet the whole crew, including Pleck, Dar, C-53, Horse Hat, and maybe even Beano! The best part is that they probably won\'t even know you\'re coming.',
        price: 1000,
        checkIn: '15:00',
        checkOut: '11:00',
        cancellationPolicy: 2,
        onArrival: 2,
        minStay: 3,
        bookingPeriod: 12,
        maxGuests: 6,
        walk: 1,
        shelterIsProvided: true,
        shelterType: 1,
        hostId: 5,
      },
      {
        name: 'The Titanic',
        description: 'The unsinkable ship!* Camp at your own risk. But seriously, consider camping here. We really need the money. *has sunk',
        price: 10,
        checkIn: '15:00',
        checkOut: '11:00',
        cancellationPolicy: 3,
        onArrival: 3,
        minStay: 1,
        bookingPeriod: 1,
        maxGuests: 100,
        walk: 3,
        shelterIsProvided: true,
        shelterType: 2,
        hostId: 6,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
