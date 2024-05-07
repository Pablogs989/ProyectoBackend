const { Review, User } = require('../models/index.js');

const ReviewController = {
    async getAll(req, res) {
        try {
            const reviews = await Review.findAll({
                include: [{ model: User, attributes: ["name"] }],
            });
            res.send({ msg: "All reviews", reviews });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async create(req, res) {
        try {
            const review = await Review.create({
                UserId: req.user.id,
                ProductId: req.body.productId,
                review: req.body.review
            });
            res.status(201).send({ msg: "Review created", review });

        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await Review.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.send("Review updated");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async delete(req, res) {
        try {
            await Review.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.send("Review deleted");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
}

module.exports = ReviewController