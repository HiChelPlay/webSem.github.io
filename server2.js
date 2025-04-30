const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Статические файлы
app.use(express.json());

// Маршруты API
app.use('/api', require('./routes/volunteersRoutes'));
app.use('/api', require('./routes/ogranizersRoutes'));
app.use('/api', require('./routes/eventsRoutes'));

// Корневой маршрут
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Обработка 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
