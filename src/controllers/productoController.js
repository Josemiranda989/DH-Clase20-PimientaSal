const productos = require('../database/productos')
const controller = {
   detalle: (req, res) => {
            const plato = req.params.plato;
            let platoParaMostrar;
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].nombrePlato == plato) {
                    platoParaMostrar = productos[i];
                }
            }
            res.render("detalleMenu", { producto: platoParaMostrar });

    },
}

module.exports = controller