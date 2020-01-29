const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => res.sendStatus(200));
router.use('/me', require('./me'));
router.use('/journey', require('./journey'));
router.use('/activity', require('./activity'));

module.exports = router;
