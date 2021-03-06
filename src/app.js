const path = require('path');
const http = require('http');
const express = require('express');
require('debug')('buymystuffapp:api-gateway');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser');
const cors = require('cors');
const {CORS_OPTIONS, HEADERS_CONFIG} = require('./config/config');

const onListening = require('./modules/server/onListening');
const onError = require('./modules/server/onError');
const normalizePort = require('./modules/server/normalizePort');

const indexRouter = require('./routes/index');

const app = express();

/**
 * MIDDLEWARES
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(HEADERS_CONFIG);

/**
 * ROUTES
 */
app.use('/', indexRouter);

/**
 * ERROR HANDLING
 */
app.use((req, res) => {
  res.status(req.status || 404);
  if (req.accepts('html')) {
    return res.sendFile(path.join(__dirname + '/public/404.html'));
  }

  const jsonResponse = {
    code: 404,
    message: 'Page not found',
  };

  if (req.accepts('json')) {
    return res.json(jsonResponse);
  }

  return res.type('txt').send(JSON.stringify(jsonResponse));
});

app.use((error, req, res) => {
  console.log(error);
  res.status(req.status || 500);
  if (req.accepts('html')) {
    return res.sendFile(path.join(__dirname + '/public/500.html'));
  }

  const jsonResponse = {
    code: 500,
    message: 'Internal Server Error',
  };

  if (req.accepts('json')) {
    return res.json(jsonResponse);
  }

  return res.type('txt').send(JSON.stringify(jsonResponse));
});

/**
 * SERVER CREATION
 */

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on('error', error => onError(error, port));
server.on('listening', () => onListening(server));

module.exports = app;
