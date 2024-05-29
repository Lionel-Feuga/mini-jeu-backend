const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const characterRoutes = require('./routes/characterRoutes');
const abilityRoutes = require('./routes/abilityRoutes');
const armorRoutes = require('./routes/armorRoutes');
const enemyRoutes = require('./routes/enemyRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const weaponRoutes = require('./routes/weaponRoutes');
const seedDatabase = require('./seed');

const app = express();
app.use(cors());
app.use(express.json());

characterRoutes(app);
abilityRoutes(app);
armorRoutes(app);
enemyRoutes(app);
inventoryRoutes(app);
weaponRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(async() => {
  await seedDatabase();
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
