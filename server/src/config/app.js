const express = require('express');
const cors = require('cors');

const routes = require('../routes/router');

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const corsOptions = { origin: 'http://localhost:3000', credentials: true };
app.use( cors(corsOptions) );

app.use(routes);

console.log('Express app initialised!');
module.exports = app;