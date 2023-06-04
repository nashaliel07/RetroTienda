const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//aqui base de datos BB.DD coneccion
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

//Import Routes
const itemsRoutes = require("./routes/items");
const imgRoutes = require("./routes/items.js");

//Rutas
app.get("/", (req, res) => {
  res.send("HOLA CASITAAA!");
});
//MIDLEWARE
app.use(cors());
app.use(express.json());
//imagenes
app.use("/img", imgRoutes);

//items
app.use("/items", itemsRoutes);

//Start
app.listen(3000);
