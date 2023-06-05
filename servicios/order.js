const Order = require("../models/Order.js");

const OrdebItems = async (request) => {
  const orden = (order = new Order({
    email: request.email,
    items: request.items,
  }));
  await orden.save();
  return orden;
};

module.exports = {
  OrdebItems,
};
