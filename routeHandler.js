const productRoutes = require("./routes/Carrito");
module.exports = (app) => {
  app.use("/product", productRoutes);
};
