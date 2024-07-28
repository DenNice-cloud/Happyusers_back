require('module-alias/register');

const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3005;
const app = express();

const tiles = require('data/tiles');
const paint = require('data/paint');
const paintFilters = require('data/paintFilters');
const tilesFilters = require('data/tilesFilters');
const brands = require('data/brands');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/textures/tiles', (_, res) => {
  res.json({ tiles, tilesFilters, brands });
});

app.get('/textures/paint', (_, res) => {
  res.json({ paint, paintFilters, brands });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
