const { Character } = require('../models');

module.exports = function (app) {
  app.get("/v1/characters", async function (req, res) {
    try {
      const characters = await Character.findAll();
      res.json({ data: characters, error: null });
    } catch (err) {
      console.error('Error fetching characters:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/characters/:id", async function (req, res) {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character) return res.json({ error: "not_found" });
      res.json({ data: character, error: null });
    } catch (err) {
      console.error('Error fetching character by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/characters", async function (req, res) {
    try {
      const character = await Character.create(req.body);
      res.json({ data: character, error: null });
    } catch (err) {
      console.error('Error creating character:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/characters/:id", async function (req, res) {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character) return res.json({ error: "not_found" });
      await character.update(req.body);
      res.json({ data: character, error: null });
    } catch (err) {
      console.error('Error updating character:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/characters/:id", async function (req, res) {
    try {
      const character = await Character.findByPk(req.params.id);
      if (!character) return res.json({ error: "not_found" });
      await character.destroy();
      res.json({ data: character, error: null });
    } catch (err) {
      console.error('Error deleting character:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
