const Queue = require('bull');
const { setQueues } = require('bull-board')
const path = require('path');


const redis = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || 'secret'
};

const journeyCalculations = new Queue('journey-calculations', { redis });
journeyCalculations.process(1, path.resolve(__dirname, 'processors', 'journey-calculations.js'));

const magicLinks = new Queue('magic-links', { redis });
magicLinks.process(1, path.resolve(__dirname, 'processors', 'magic-links.js'));

setQueues([journeyCalculations, magicLinks]);

module.exports = {
  journeyCalculations,
  magicLinks
};
