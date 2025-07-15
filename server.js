const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'JSF AI _ Text to Speech.html'));
});

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
