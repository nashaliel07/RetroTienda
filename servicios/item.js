const FuncionItems = require("../routes/items");
const Item = require("../models/Item");
const { request } = require("express");
//Crear itms
const createItem = async (request) => {
  const item = new Item({
    title: request.title,
    price: request.price,
    image: request.image,
  });
  await item.save(req.body);
  return item;
};
//modelo de los items
const modeloItems = async (request) => {
  const modeitem = new Item();
  await modeitem.save(req.body);
  return modeitem;
};

//traer articulos
const bringItems = async (request) =>{
  const bringitem = new Item();
  await bringitem.save(req.body);
  return bringitem;
}

module.exports = {
  createItem,
  modeloItems,
  bringItems,
};
