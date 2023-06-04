const mongoose = require("mongoose");
//comprobar si los datos ingresados son verdaderos
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
