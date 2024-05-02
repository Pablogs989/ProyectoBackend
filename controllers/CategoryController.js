const { Category, Product } = require('../models/index.js');

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
    }
}

module.exports = CategoryController