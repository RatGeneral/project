const express = require('express');
const router = express.Router();

const userRoutes = require('./mongodb/userRoutes');
const followRoutes = require('./mongodb/followRoutes');
const groupRoutes = require('./sqlite/groupRoutes');
const eventRoutes = require('./sqlite/eventRoutes');

router.use('/users', userRoutes);
router.use('/follows', followRoutes);
router.use('/groups', groupRoutes);
router.use('/events', eventRoutes);

module.exports = router;
