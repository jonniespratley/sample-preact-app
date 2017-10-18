'use strict';
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static(__dirname + '/build'));

app.use((req, res, next) => {
	console.log('app', req.method, req.url);
	next();
});

app.listen(PORT, () => {
  console.log('App running on ', PORT);
});
