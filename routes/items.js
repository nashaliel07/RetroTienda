const express = require("express");
const router = express.Router();

//Models
const Item = require("../models/Item.js");

//mock
const itemsMock = require("../mock/items.json");

//get items
router.get("/", async (req, res) => {
  try {
    const itemsFromDB = await Item.find();
    console.log("fuegito:items", itemsFromDB);
    res.json(itemsFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// CREATE ITEM
router.post("/", async (req, res) => {
  console.log(req.body);
  const item = new Item({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const newItem = await item.save();
    res.json(newItem);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//exportar
module.exports = router;

/**
 * @swagger
 * components:
 *  models:
 *     Itenm:
 *       type: object
 *       required:
 *          - title
 *          - price
 *          - image
 *       properties:
 *          title:
 *            type: string
 *            description: Nombre del videojuego
 *          price:
 *             type: Number
 *             description: precio del juego
 *          image:
 *             type: string
 *             description: imgane del producto//codigo aun en proceso
 *          
 *       example:
 *          "title": "Mega Man",
            "price": 10.99,
            "image": ""
 */

/**
 * @swagger
 * tags:
 *  name: item.js
 *  description: API para la lista de productos|
 *
 */

/**
 * @swagger
 * prueba.rest:
 *  GET http://localhost:3000:
 *      description: muestra lo que hay en localhost
 *
 *    GET http://localhost:3000/ITEMS
 *      response: Devuelve una lista de productos ingresados
 *
 *      POST http://localhost:3000/ITEMS: [Items.js]
 *       descripcion: añade productos
 *          content:
 *                  application/json
 *              models:
 *                  type: array
 *                  $ref: "localhost:3000/ITEMS"
 */
