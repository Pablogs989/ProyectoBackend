const { Category, Product } = require('../models/index.js');

const CategoryController = {
    async getAll(req, res) {
        try {
          const users = await User.findAll({
            include: [{ model: Post, attributes: ["title"] }],
          });
          res.send({ msg: "Todos los usuarios", users });
        } catch (error) {
          console.error(error);
          res.status(500).send(error);
        }
      },
}

module.exports = CategoryController