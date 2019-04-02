// Express
const express = require('express');
// Port
const PORT = 3000;

// Express app
const app = express();

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}.`);
});