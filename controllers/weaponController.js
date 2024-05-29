const { Weapon } = require('../models');

module.exports = function (app) {
  app.get("/v1/weapons", async function (req, res) {
    try {
      const weapons = await Weapon.findAll();
      res.json({ data: weapons, error: null });
    } catch (err) {
      console.error('Error fetching weapons:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/weapons/:id", async function (req, res) {
    try {
      const weapon = await Weapon.findByPk(req.params.id);
      if (!weapon) return res.json({ error: "not_found" });
      res.json({ data: weapon, error: null });
    } catch (err) {
      console.error('Error fetching weapon by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/weapons", async function (req, res) {
    try {
      const weapon = await Weapon.create(req.body);
      res.json({ data: weapon, error: null });
    } catch (err) {
      console.error('Error creating weapon:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/weapons/:id", async function (req, res) {
    try {
      const weapon = await Weapon.findByPk(req.params.id);
      if (!weapon) return res.json({ error: "not_found" });
      await weapon.update(req.body);
      res.json({ data: weapon, error: null });
    } catch (err) {
      console.error('Error updating weapon:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/weapons/:id", async function (req, res) {
    try {
      const weapon = await Weapon.findByPk(req.params.id);
      if (!weapon) return res.json({ error: "not_found" });
      await weapon.destroy();
      res.json({ data: weapon, error: null });
    } catch (err) {
      console.error('Error deleting weapon:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
