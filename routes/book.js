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
bookRoutes.get('/', controller.create);

// POST

// PUT

// DELETE