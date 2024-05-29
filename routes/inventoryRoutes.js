const inventoryController = require('../controllers/inventoryController');

module.exports = function (app) {
  inventoryController(app);
};
