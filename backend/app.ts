const express = require('express');
const environment = process.env.NODE_ENV;
require('express-async-errors');
const isProduction = environment === "production"

const app = express();
const port = process.env.PORT;
