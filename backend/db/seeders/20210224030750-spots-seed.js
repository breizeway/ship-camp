'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        name: 'The Flying Dutchman\'s ship',
        description: 'Camp aboard me ship if you dare! This old girl is good and scary. Well not good AND scary at the same time--just *good and scary*--you know, mold growing on the ceilings, bugs in the sink. Highlights of your stay may include: swabbing decks, perfume department access, and learning how to tie your shoes. Take home complimentary plastic doubloons to remember your stay.',
        price: 80,
        checkIn: 15,
        checkOut: 11,
        minStay: 1,
        bookingPeriod: 12,
        maxGuests: 2,
        shelterIsProvided: true,
        shelterTypeId: 4,
        cancellationPolicyId: 2,
        arrivalTypeId: 1,
        accessTypeId: 5,
        hostId: 4,
      },
      {
        name: 'The Bargarean Jade',
        description: '""Ship of the stars!"" Book a stay aboard the Bargarean Jade. The Bargarean Jade, aka ""Bargie"" is a sentient spaceship with a storied past. Once a famous actress, she was known throughout Hollowood for her beauty and acting prowess. Now, she helps run ambassadorial missions with her crew and is looking for some spare croon. Meet the whole crew, including Pleck, Dar, C-53, Horse Hat, and maybe even Beano! The best part is that they probably won\'t even know you\'re coming.',
        price: 1000,
        checkIn: 15,
        checkOut: 11,
        minStay: 2,
        bookingPeriod: 6,
        maxGuests: 6,
        shelterIsProvided: true,
        shelterTypeId: 2,
        cancellationPolicyId: 4,
        arrivalTypeId: 3,
        accessTypeId: 3,
        hostId: 5,
      },
      {
        name: 'The Titanic',
        description: 'The unsinkable ship!* Camp at your own risk. But seriously, consider camping here. We really need the money. *has sunk',
        price: 10,
        checkIn: 15,
        checkOut: 11,
        minStay: 3,
        bookingPeriod: 1,
        maxGuests: 100,
        shelterIsProvided: false,
        shelterTypeId: 6,
        cancellationPolicyId: 1,
        arrivalTypeId: 2,
        accessTypeId: 5,
        hostId: 6,
      },
      {
        name: 'The Belafonte',
        description: 'A fine boat equipped for documentary and marine biology missions. Boat is available between outings to fund raise for missions. Meet the whole creq, including Steve Zissou himself. Not responsible for any incdents involving Leopard Sharks.',
        price: 150,
        checkIn: 15,
        checkOut: 11,
        minStay: 5,
        bookingPeriod: 2,
        maxGuests: 4,
        shelterIsProvided: true,
        shelterTypeId: 4,
        cancellationPolicyId: 3,
        arrivalTypeId: 2,
        accessTypeId: 1,
        hostId: 7,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
