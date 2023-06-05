const Item = require("../models/Item");

//Crear itms
const createItem = async (request) => {
  const item = new Item({ ...request });
  await item.save(request);
  return item;
};
//modelo de los itms
const modeloItems = async (request) => {
  const modeitem = new Item(request);
  await modeitem.save(req.body);
  return modeitem;
};

//traer itms
const bringItmes = async (request) => {
  const traeItem = new Item({
    title: request.title,
    price: request.price,
    image: request.image,
  });

  try {
    await traeItem.save();
    return traeItem;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  createItem,
  modeloItems,
  bringItmes,
};
