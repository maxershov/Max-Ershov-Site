/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("./node_modules/express");
const history = require('./node_modules/connect-history-api-fallback');
const expressStaticGzip = require('express-static-gzip');
const helmet = require('./node_modules/helmet');
const path = require("path");

const port = process.env.PORT || 8080;
const staticFiles = expressStaticGzip(path.join(__dirname, "dist"));

const app = express();
app.use(helmet());
app.use(helmet.noCache());
app.use(staticFiles);
app.use(history());
app.listen(port);
app.use(staticFiles)