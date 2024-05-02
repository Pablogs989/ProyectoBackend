const { Product, Category } = require('../models/index.js');

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include: [{ model: Category, attributes: ["name_category"] }],
            });
            res.send({ msg: "Todos los productos", products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ msg: "Producto creado con éxito", product });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

module.exports = ProductController