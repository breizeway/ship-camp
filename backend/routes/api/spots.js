const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

// const validateSignup = [
//   check('email')
//     .exists({ checkFalsy: true })
//     .isEmail()
//     .withMessage('Please provide a valid email.'),
//   check('username')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 4 })
//     .withMessage('Please provide a username with at least 4 characters.'),
//   check('username')
//     .not()
//     .isEmail()
//     .withMessage('Username cannot be an email.'),
//   check('firstName')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 4 })
//     .withMessage('Please provide a first name with at least 4 characters.'),
//   check('lastName')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 4 })
//     .withMessage('Please provide a first name with at least 4 characters.'),
//   check('password')
//     .exists({ checkFalsy: true })
//     .isLength({ min: 6 })
//     .withMessage('Password must be 6 characters or more.'),
//   handleValidationErrors,
// ];

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    console.log('   :::REQ.BODY:::   ', req.body);
    console.log('   :::REQ.BODY:::   ', req.body);
    const { text, date, accom } = req.body;
    const spots = await Spots.findAll({
      where: {
        name: { [Op.iLike]: `%${text}%`}
      }
    })
    return spots;
  })
)

module.exports = router;
