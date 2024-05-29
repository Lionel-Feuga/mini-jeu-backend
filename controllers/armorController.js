const { Armor } = require('../models');

module.exports = function (app) {
  app.get("/v1/armors", async function (req, res) {
    try {
      const armors = await Armor.findAll();
      res.json({ data: armors, error: null });
    } catch (err) {
      console.error('Error fetching armors:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/armors/:id", async function (req, res) {
    try {
      const armor = await Armor.findByPk(req.params.id);
      if (!armor) return res.json({ error: "not_found" });
      res.json({ data: armor, error: null });
    } catch (err) {
      console.error('Error fetching armor by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/armors", async function (req, res) {
    try {
      const armor = await Armor.create(req.body);
      res.json({ data: armor, error: null });
    } catch (err) {
      console.error('Error creating armor:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/armors/:id", async function (req, res) {
    try {
      const armor = await Armor.findByPk(req.params.id);
      if (!armor) return res.json({ error: "not_found" });
      await armor.update(req.body);
      res.json({ data: armor, error: null });
    } catch (err) {
      console.error('Error updating armor:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/armors/:id", async function (req, res) {
    try {
      const armor = await Armor.findByPk(req.params.id);
      if (!armor) return res.json({ error: "not_found" });
      await armor.destroy();
      res.json({ data: armor, error: null });
    } catch (err) {
      console.error('Error deleting armor:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
