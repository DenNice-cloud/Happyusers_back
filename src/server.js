const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3005;
const app = express();

const tiles = require('../data/tiles');
const paint = require('../data/paint');
const filters = require('../data/filters');
const brands = require('../data/brands');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/textures/tiles', (req, res) => {
  res.json({ tiles, filters, brands });
});

app.get('/textures/paint', (req, res) => {
  res.json({ paint, filters, brands });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
