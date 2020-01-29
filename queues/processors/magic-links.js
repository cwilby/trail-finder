const { MagicLink } = require('../../models');
const { generateToken } = require('../../utils');
const { MagicLinkEmail } = require('../../emails');

module.exports = async ({ data: { email } }) => {
  const token = generateToken();

  await MagicLink.create({ email, token });
  await MagicLinkEmail({ email, emailToken: token });
  
  return Promise.resolve();
};
