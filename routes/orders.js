const express = require("express");
const Order = require("../models/Order");
const vr = require("../servicios/order");
const router = express.Router();

//CREAR PEDIDO
router.post("/", async (req, res) => {
  console.log("BODY", req.body);

  try {
    const { email, items } = req.body;
    if (!email && items?.lenght > 0) return res.statusCode(400);
    const newOrder = await vr.OrdebItems(req.body);
    res.json(newOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
