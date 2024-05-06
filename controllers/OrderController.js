const { Order, Product } = require('../models/index.js');

const OrderController = {
    async getAll(req, res) {
        try {
            const orders = await Order.findAll({
                include: [{ model: Product, attributes: ["name"] }],
            });
            res.send({ msg: "Todas las categorias", orders });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = OrderController;