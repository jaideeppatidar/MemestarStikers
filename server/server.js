const express = require('express');
const upload = require('./src/mutler/multerConfig')
const app = express();
const port = 6000;
const mongodb = require('./src/database/db')
// Import routes
const routes = require('./src/routes');

// Use routes
app.use('/user', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
