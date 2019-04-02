// Express
const express = require('express');

// Express Router
const Router = express.Router;

// Controller
const controller = require('../controllers/book');

// Create the Router 
const bookRoutes = Router();

// Handlers for my routers
// GET
bookRoutes.get('/', controller.retrieveAll);

// POST
bookRoutes.post('/', controller.create);

// PUT

// DELETE

// EXPORT THE ROUTER !!!
module.exports = bookRoutes;