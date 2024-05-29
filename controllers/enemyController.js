const { Enemy } = require('../models');

module.exports = function (app) {
  app.get("/v1/enemies", async function (req, res) {
    try {
      const enemies = await Enemy.findAll();
      res.json({ data: enemies, error: null });
    } catch (err) {
      console.error('Error fetching enemies:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/enemies/:id", async function (req, res) {
    try {
      const enemy = await Enemy.findByPk(req.params.id);
      if (!enemy) return res.json({ error: "not_found" });
      res.json({ data: enemy, error: null });
    } catch (err) {
      console.error('Error fetching enemy by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/enemies", async function (req, res) {
    try {
      const enemy = await Enemy.create(req.body);
      res.json({ data: enemy, error: null });
    } catch (err) {
      console.error('Error creating enemy:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/enemies/:id", async function (req, res) {
    try {
      const enemy = await Enemy.findByPk(req.params.id);
      if (!enemy) return res.json({ error: "not_found" });
      await enemy.update(req.body);
      res.json({ data: enemy, error: null });
    } catch (err) {
      console.error('Error updating enemy:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/enemies/:id", async function (req, res) {
    try {
      const enemy = await Enemy.findByPk(req.params.id);
      if (!enemy) return res.json({ error: "not_found" });
      await enemy.destroy();
      res.json({ data: enemy, error: null });
    } catch (err) {
      console.error('Error deleting enemy:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
