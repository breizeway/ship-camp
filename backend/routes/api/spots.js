const express = require('express')
const asyncHandler = require('express-async-handler');

const {
  Sequelize,
  Spot,
  ShelterType,
  CancellationPolicy,
  ArrivalType,
  AccessType,
  User,
  Photo,
  Amenity
} = require('../../db/models');
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
        {model: User,
          as: 'Host',
          attributes: {
            exclude: ['hashedPassword', 'email', 'username', 'isHost']
          }
        },
        {model: Photo},
      ]
      })
    return res.json({spots});
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const spot = await Spot.findAll({
      where: {
        id
      },
      include: [
        {model: ShelterType},
        {model: CancellationPolicy},
        {model: ArrivalType},
        {model: AccessType},
        {model: User,
          as: 'Host',
          attributes: {
            exclude: ['hashedPassword', 'email', 'username', 'isHost']
          }
        },
        {model: Photo},
        {model: Amenity},
      ]
      })[0]
    return res.json({spot});
  })
)

module.exports = router;
