const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;