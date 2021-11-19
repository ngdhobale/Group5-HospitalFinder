const express = require('express')
const app = express();
app.use(express.json());
const apiRoute = require('./api/index');
const db = require('./config/db');
var cors = require('cors');
app.use(cors());
// middleware
app.use('/api',apiRoute);
app.listen(4000);