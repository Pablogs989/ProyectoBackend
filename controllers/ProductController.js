const { Product, Category, ProductCategory, Review } = require('../models/index.js');

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include: [{ model: Category, attributes: ["name_category"] }, { model: Review, attributes: ["UserId", "review"]}],
            });
            res.send({ msg: "All products", products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ msg: "Product created", product });

        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Product.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.send("Product updated");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            await ProductCategory.destroy({
                where: {
                    ProductId: req.params.id,
                },
            });
            res.send("Product deleted");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getById(req, res) {
        try {
            const products = await Product.findByPk(req.params.id, {
                include: [{ model: Category, attributes: ["name_category"] }, { model: Review, attributes: ["UserId", "review"]}],
            });
            res.send({ msg: "Product " + req.params.id, products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByName(req, res) {
        try {
            const products = await Product.findOne({
                where: { name: req.body.name },
                include: [{ model: Category, attributes: ["name_category"] }]
            });
            res.send({ msg: "Product " + req.body.name, products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByPrice(req, res) {
        try {
            const products = await Product.findOne({
                where: { price: req.body.price },
                include: [{ model: Category, attributes: ["name_category"] }]
            });
            res.send({ msg: "Product priced at " + req.body.price, products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getAllPriceDesc(req, res) {
        try {
            const products = await Product.findAll({
                order: [['price', 'DESC']],
                include: [{ model: Category, attributes: ["name_category"] }],
            });
            res.send({ msg: "All products", products });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = ProductController