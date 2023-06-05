const express = require("express");
const {Item} = require('../models/Item');

const buscarCoincidencia = async () => {
    const post = await Item.findOne({
        title:"Mega Man"
    })

    console.log('**** RESULTADO ****', post);
}

buscarCoincidencia();