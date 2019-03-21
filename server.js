const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./api/Dishes/dishesRouter');
const recipesRouter = require('./api/Recipes/recipesRouter')

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;