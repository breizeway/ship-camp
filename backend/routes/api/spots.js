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
  Review,
  Booking
} = require('../../db/models');

const models = require('../../db/models');
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
            exclude: ['hashedPassword', 'email', 'isHost']
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
            exclude: ['hashedPassword', 'email', 'isHost']
          }
        },
        {
          model: User,
          as: 'Bookings',
          attributes: {
            exclude: ['hashedPassword', 'email', 'isHost']
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
            exclude: ['hashedPassword', 'email', 'isHost']
            }
          }
        },
      ]
    })
    return res.json({spot});
  })
)

router.post(
  '/book',
  asyncHandler(async (req, res) => {
    const { userId, spotId, startDate, endDate, guests } = req.body

    const booking = await Booking.create({
      userId,
      spotId,
      startDate,
      endDate,
      guests
    })

    return res.json({booking});
  })
)

module.exports = router;
