'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      checkIn: {
        allowNull: false,
        type: Sequelize.TIME,
        defaultValue: '15:00'
      },
      checkOut: {
        allowNull: false,
        type: Sequelize.TIME,
        defaultValue: '11:00'
      },
      minStay: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bookingPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      maxGuests: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shelterIsProvided: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      shelterTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ShelterTypes'
        }
      },
      cancellationPolicyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CancellationPolicies'
        }
      },
      arrivalTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ArrivalTypes'
        }
      },
      accessTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'AccessTypes'
        }
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
