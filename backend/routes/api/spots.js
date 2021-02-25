const express = require('express')
const asyncHandler = require('express-async-handler');

const { Sequelize, Spot, ShelterType, CancellationPolicy, ArrivalType, AccessType, User, Photo, Amenity } = require('../../db/models');
const Op = Sequelize.Op;

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { text } = req.body;
    const spots = await Spot.findAll({
      where: {
        name: { [Op.iLike]: `%${text}%` }
      },
      include: [
        {
          model: ShelterType
        },
        {
          model: CancellationPolicy
        },
        {
          model: ArrivalType
        },
        {
          model: AccessType
        },
        {
          model: User,
          as: 'Host',
          attributes: {
            exclude: ['hashedPassword', 'email', 'username', 'isHost']
          }
        },
        {
          model: Photo
        },
        {
          model: Amenity
        },
      ]
      })
    return res.json({spots});
  })
)

module.exports = router;
