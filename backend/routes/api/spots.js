const express = require('express')
const asyncHandler = require('express-async-handler');

const { Sequelize, Spot } = require('../../db/models');
const Op = Sequelize.Op;

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { text } = req.body;
    const spots = await Spot.findAll({
      where: {
        name: { [Op.iLike]: `%${text}%` }
      }
    })
    return res.json({spots});
  })
)

module.exports = router;
