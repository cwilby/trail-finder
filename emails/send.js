const mailgun = require('mailgun.js');
const nodemailer = require('nodemailer');

async function sendViaMailgun(options) {
  return mailgun
    .client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
      public_key: process.env.MAILGUN_PUBLIC_KEY
    })
    .messages.create(process.env.MAILGUN_DOMAIN, {
      from: options.from || 'noreply@trailfinder.io',
      to: options.to,
      subject: options.subject,
      html: options.html
    });
}

async function sendViaMailhog({ to, from, subject, html }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: '127.0.0.1',
      port: 1025,
      secure: false
    });
    transporter.sendMail(
      {
        to: `<${to}>`,
        from: `<${from || 'noreply@trailfinder.io'}>`,
        subject,
        html
      },
      (err, info) => (err ? reject(err) : resolve(info))
    );
  });
}

module.exports = options =>
  process.env.NODE_ENV === 'production' ? sendViaMailgun(options) : sendViaMailhog(options);
