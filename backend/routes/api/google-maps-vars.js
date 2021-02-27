const express = require('express');

const router = express.Router();

router.get(
  '/',
  (_req, res) => {
    const key_id = process.env.GOOGLE_MAPS_API_KEY_ID;
    const key = process.env.GOOGLE_MAPS_API_KEY;
    return res.json({key_id, key});
  }
);

module.exports = router;
