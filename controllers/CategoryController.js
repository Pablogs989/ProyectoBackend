const { Category, Product, ProductCategory } = require('../models/index.js');

const CategoryController = {
    async getAll(req, res) {
        try {
            const categories = await Category.findAll({
                include: [{ model: Product, attributes: ["name"] }],
            });
            res.send({ msg: "Todas las categorias", categories });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({ msg: "Categoria creada con éxito", category });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Category.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.send("Category updated");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id,
                },
            });
            await ProductCategory.destroy({
                where: {
                    CategoryId: req.params.id,
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
            const categories = await Category.findByPk(req.params.id, {
                include: [{ model: Product, attributes: ["name"] }],
            });
            res.send({ msg: "Category " + req.params.id, categories });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getByName(req, res) {
        try {
            const categories = await Category.findOne({
                where: { name_category: req.body.name },
                include: [{ model: Product, attributes: ["name"] }]
            });
            res.send({ msg: "Category " + req.body.name, categories });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = CategoryController