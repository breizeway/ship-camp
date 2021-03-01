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
  Amenity,
  Review
} = require('../../db/models');
const Op = Sequelize.Op;

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { text, date, accom } = req.query;

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
        {model: Review},
      ]
      })
    return res.json({spots});
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const spot = await Spot.findByPk(id, {
      include: [
        {model: ShelterType},
        {model: CancellationPolicy},
        {model: ArrivalType},
        {model: AccessType},
        {
          model: User,
          as: 'Host',
          attributes: {
            exclude: ['hashedPassword', 'email', 'username', 'isHost']
          }
        },
        {
          model: Photo,
          order: ['id']
        },
        {model: Amenity},
        {
          model: Review,
          include: {
            model: User,
            as: 'Reviewer',
            attributes: {
            exclude: ['hashedPassword', 'email', 'username', 'isHost']
          }
          }
        },
      ]
    })
    return res.json({spot});
  })
)

module.exports = router;
