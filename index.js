// Express
const express = require('express');
// Port
const PORT = 3000;

// Express app
const app = express();

// Require Router
const bookRouter = require('./routes/book');

// Connect router
app.use('/book', bookRouter);

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}.`);
});