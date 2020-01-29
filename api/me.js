const { MagicLink } = require('../models');
const router = require('express').Router();
const { magicLinks } = require('../queues');

router.post('/link', async (req, res) => {
  const { email } = req.body;
  magicLinks.add({ email });
  res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  const { emailToken } = req.body;
  const magicLink = MagicLink;
});

module.exports = router;
