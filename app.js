const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// BB.DD
const uri =
  "mongodb+srv://RetriTienda:TiendaRetro123@RetriTienda.rmueswe.mongodb.net/?retryWrites=true&w=majority";
//comprobar si esta conectado
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
    // Realiza otras operaciones después de la conexión exitosa
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectado a BB.DD"));

// Import Routes
const itemsRoutes = require("./routes/items");
const imgRoutes = require("./routes/img");
//const paymentsIntentRoutes = require("./routes/paymentsIntent");
const ordersRoutes = require("./routes/orders");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/items", itemsRoutes);
app.use("/img", imgRoutes);
//app.use("/create-payment-intent", paymentsIntentRoutes);
app.use("/order", ordersRoutes);

// Rutas
app.get("/", (req, res) => {
  res.send("HOME!");
});

// Start
app.listen(3000);
