const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload, singleMulterUpload } = require('../../backblazeS3');

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a first name with at least 4 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a first name with at least 4 characters.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

const router = express.Router();

router.put(
  '/',
  asyncHandler(async (req, res, next) => {
    const { username } = req.body;

    const user = await User.findOne({
      where: { username: username.toLowerCase() },
    })

    if (user) return res.json({user: user.toSafeObject()});
    else {
      const err = new Error('Server Error');
      err.status = 500;
      err.title = 'No such user exists';
      err.errors = ['The user you are looking for does not exists'];
      return next(err);
    }
  })
)

// Sign up
router.post(
  '/',
  singleMulterUpload('image'),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const user = await User.signup({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
      firstName,
      lastName,
      profileImageUrl
    });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
  }),
);

module.exports = router;
