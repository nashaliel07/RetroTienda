const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();
require("./server/mongoose")(app);
require("./routeHandler")(app);
// Import Routes
const itemsRoutes = require("./routes/items");
const imgRoutes = require("./routes/img");
//const paymentsIntentRoutes = require("./routes/paymentsIntent");
const ordersRoutes = require("./routes/orders");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    message: "Arise MERN Developers",
  });
});

app.use("/items", itemsRoutes);
app.use("/img", imgRoutes);
app.use("/order", ordersRoutes);

// Rutas
app.get("/", (req, res) => {
  res.send("HOME!");
});

// Start

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is Running on ${port}`);
});
