const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Serve static files from the public folder
app.use(express.static('public'));

// Define your routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
