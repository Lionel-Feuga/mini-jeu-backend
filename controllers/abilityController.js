const { Ability } = require('../models');

module.exports = function (app) {
  app.get("/v1/abilities", async function (req, res) {
    try {
      const abilities = await Ability.findAll();
      res.json({ data: abilities, error: null });
    } catch (err) {
      console.error('Error fetching abilities:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/abilities/:id", async function (req, res) {
    try {
      const ability = await Ability.findByPk(req.params.id);
      if (!ability) return res.json({ error: "not_found" });
      res.json({ data: ability, error: null });
    } catch (err) {
      console.error('Error fetching ability by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/abilities", async function (req, res) {
    try {
      const ability = await Ability.create(req.body);
      res.json({ data: ability, error: null });
    } catch (err) {
      console.error('Error creating ability:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/abilities/:id", async function (req, res) {
    try {
      const ability = await Ability.findByPk(req.params.id);
      if (!ability) return res.json({ error: "not_found" });
      await ability.update(req.body);
      res.json({ data: ability, error: null });
    } catch (err) {
      console.error('Error updating ability:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/abilities/:id", async function (req, res) {
    try {
      const ability = await Ability.findByPk(req.params.id);
      if (!ability) return res.json({ error: "not_found" });
      await ability.destroy();
      res.json({ data: ability, error: null });
    } catch (err) {
      console.error('Error deleting ability:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
