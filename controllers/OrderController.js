const { Order, Product, User, ProductOrder } = require('../models/index.js');

const OrderController = {
    async getAll(req, res) {
        try {
            const orders = await Order.findAll({
                include: [{ model: Product, attributes: ["name"] }],
            });
            res.send({ msg: "All orders", orders });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            console.log(req.user.id)
            const user = await User.findByPk(req.user.id);
            if (!user) {
                return res.status(404).send({ msg: "User not found" });
            }
            const productIds = req.body.productIds;
            const products = await Product.findAll({
                where: { id: productIds }
            });
            let totalOrder = 0;
            products.forEach(product => {
                totalOrder += parseInt(product.price);
            });
            const order = await Order.create({
                userId: user.id,
                shippingAddress: user.shippingAddress,
                totalOrder: totalOrder,
                orderDate: new Date()
            });
            if (productIds && productIds.length > 0) {
                await ProductOrder.bulkCreate(productIds.map(productId => ({
                    ProductId: productId,
                    OrderId: order.id
                })));
            }
            res.status(201).send({ msg: "Order created", order });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = OrderController;