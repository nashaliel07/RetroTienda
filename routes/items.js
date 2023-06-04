const express = require("express");
const router = express.Router();
const item = require("../servicios/item");

//MODELS
const Item = require("../models/Item");

// GET ITEMS
router.get("/", async (req, res) => {
  try {
    const itemTar = await item.bringItems(res.body);
    res.json(itemTar);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// GET ITEM
router.get("/item", async (req, res) => {
  try {
    const { title, price, image } = await item.modeloItems(req.body);
    res.json(itemFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// CREATE ITEM
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { title, price, image } = await item.createItem(req.body);
    res.json(newItem);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
