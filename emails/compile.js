const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const mjmltohtml = require('mjml');

module.exports = async (template, context) => {
  const source = await new Promise((resolve, reject) =>
    fs.readFile(path.resolve(__dirname, template, `${template}.mjml`), 'utf-8', (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );

  const interpolated = nunjucks.renderString(source, context);

  return mjmltohtml(interpolated);
};
