const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const internalIp = require('internal-ip');
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const compiler = webpack(config);

const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  silent: false,
  stats: { color: true }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/www/index.html'));
});

const port = 8080;
const ip = internalIp.v4();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(' --------------------------------------');
  console.log(`    Local: http://0.0.0.0:${port}`);
  console.log(` External: http://${ip}:${port}`);
  console.log(' --------------------------------------');
});
