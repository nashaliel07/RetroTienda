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

const Item = new mongoose.model("Item", itemSchema);
module.exports = {Item};
