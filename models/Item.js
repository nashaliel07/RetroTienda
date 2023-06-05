const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Item", itemSchema);
