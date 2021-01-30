const express = require('express');

// port and host
const PORT = 3000;
const HOST = '0.0.0.0';

// app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Server running on http://localhost:${PORT}`);