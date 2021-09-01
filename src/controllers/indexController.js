const productos = require('../database/productos')
const controller = {
  home: (req, res) => {
   
    res.render("index", { productos: productos });
  },

  about: (req, res) => {
    res.send("acerca de nosotros");
  },
};

module.exports = controller;
