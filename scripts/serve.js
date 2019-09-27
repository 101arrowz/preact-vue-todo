const build = require('./build');
const logger = require('@parcel/logger');
const path = require('path');
const express = require('express');
const compression = require('compression');
let app = express();
const buildPath = process.argv[2] || 'dist';
const port = +process.argv[3] || 1234;
build(buildPath).then(() => {
  logger.log(logger.chalk.white.bold('Starting server at', logger.chalk.cyan(`http://localhost:${port}`)));
  app.use(compression())
  app.use(express.static(path.join(__dirname, '..', buildPath)));
  app.listen(port);
});