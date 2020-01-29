const compile = require('../compile');
const send = require('../send');

const appUrl = process.env.BASE_URL;

module.exports = async ({ email: to, emailToken }) => {
  const from = 'noreply@trailfinder.io';
  const subject = 'Sign in to TrailFinder';

  const { html } = await compile('magic-link', {
    link: `${appUrl}/login/${emailToken}`
  });

  return send({ to, from, subject, html });
};
