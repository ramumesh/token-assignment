const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const validatorRouter = require('./routes/validator');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/validate', validatorRouter);

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;
