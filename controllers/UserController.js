const { User, Token, Sequelize, Order, Product } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize
const UserController = {
    async create(req, res, next) {
        try {
            req.body.role = "user";
            const password = await bcrypt.hash(req.body.password, 10);
            const user = await User.create({ ...req.body, password });
            res.send(user);
        } catch (error) {
            console.error(error)
            next(error)
        }

    },
    login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (!user) {
                return res.status(400).send({ message: "Incorrect username or password" })
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: "Incorrect username or password" })
            }
            const token = jwt.sign({ id: user.id }, jwt_secret);
            Token.create({ token, UserId: user.id });
            res.send({ message: 'Bienvenid@ ' + user.name, user, token });
        })
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Loged out' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Logout error' })
        }
    },

    async getUserInfo(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.user.id
                },
                include: [{ model: Order, attributes: ["id"], include: [{ model: Product, attributes: ["name"] }] }],
            });
            res.send({ msg: "Current user", user });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = UserController;