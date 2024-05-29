const characterController = require('../controllers/characterController');

module.exports = function (app) {
  characterController(app);
};
