const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { UI } = require('bull-board')
require('dotenv').config({
  path: process.env.NODE_ENV === 'testing' ? '.env.testing' : '.env'
});

const app = express();
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
if (process.env.NODE_ENV !== 'production') {
  app.use(require('./middleware/cors'));
  app.use('/admin/queues', UI);
}
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/api/v1', require('./api'));
app.all('/*', (req, res) => res.sendFile(`${path.resolve(__dirname, 'dist')}/index.html`));
app.use(require('./middleware/errorHandler'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
