const { Inventory } = require('../models');

module.exports = function (app) {
  app.get("/v1/inventory", async function (req, res) {
    try {
      const inventory = await Inventory.findAll();
      res.json({ data: inventory, error: null });
    } catch (err) {
      console.error('Error fetching inventory:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.get("/v1/inventory/:id", async function (req, res) {
    try {
      const inventoryItem = await Inventory.findByPk(req.params.id);
      if (!inventoryItem) return res.json({ error: "not_found" });
      res.json({ data: inventoryItem, error: null });
    } catch (err) {
      console.error('Error fetching inventory item by id:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.post("/v1/inventory", async function (req, res) {
    try {
      const inventoryItem = await Inventory.create(req.body);
      res.json({ data: inventoryItem, error: null });
    } catch (err) {
      console.error('Error creating inventory item:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.put("/v1/inventory/:id", async function (req, res) {
    try {
      const inventoryItem = await Inventory.findByPk(req.params.id);
      if (!inventoryItem) return res.json({ error: "not_found" });
      await inventoryItem.update(req.body);
      res.json({ data: inventoryItem, error: null });
    } catch (err) {
      console.error('Error updating inventory item:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });

  app.delete("/v1/inventory/:id", async function (req, res) {
    try {
      const inventoryItem = await Inventory.findByPk(req.params.id);
      if (!inventoryItem) return res.json({ error: "not_found" });
      await inventoryItem.destroy();
      res.json({ data: inventoryItem, error: null });
    } catch (err) {
      console.error('Error deleting inventory item:', err);
      res.status(500).json({ error: "internal_server_error" });
    }
  });
};
