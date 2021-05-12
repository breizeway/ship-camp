'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) throw new Error('Cannot be an email.');
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 64]
      },
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 256]
      },
    },
    isHost: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    defaultScope: {
      attibutes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    }
  });
  /*
  Define an instance method, User.prototype.toSafeObject, in the user.js model file that will
  return an object with the User instance information that is safe to save to a JWT.
  */
  User.prototype.toSafeObject = function() {
    const { id, username, email, firstName, lastName, profileImageUrl, createdAt } = this;
    return { id, username, email, firstName, lastName, profileImageUrl, createdAt };
  }
  /*
  Define an instance method, User.prototype.validatePassword in the user.js model file that will
  accept a password string and return true if there is a match with the User instance's hashedPassword, otherwise return false.
  */
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  /*
  Define a static method, User.getCurrentUserById in the user.js model file that will
  accept an id and return a User with that id using the currentUser scope.
  */
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  /*
  Define a static method, User.login in the user.js model file that will
  accept an object with a credential and password key and find a User
  with a username or email with the specified credential using the loginUser scope.
  If a user is found, then validate the password by passing it into the instance's
  .validatePassword method. If the password is valid, then return the user with the currentUser scope.
  */
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  /*
  Define a static method, User.signup in the user.js model file that will
  accept an object with a username, email and password key.
  Hash the password using bcryptjs package's hashSync method.
  Create a User with the username, email, and hashedPassword.
  Return the created user with the currentUser scope.
  */
  User.signup = async function ({ username, email, password, firstName, lastName, profileImageUrl }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      firstName,
      lastName,
      profileImageUrl
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  User.associate = function(models) {
    const bookingColumnMapping = {
      through: 'Booking',
      foreignKey: 'userId',
      otherKey: 'spotId'
    }
    User.belongsToMany(models.Spot, bookingColumnMapping);
  };
  return User;
};
