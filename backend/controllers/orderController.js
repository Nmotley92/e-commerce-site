const Order = require("../models/OrderModel");
const ObjectId = require("mongodb").ObjectId;

const getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: ObjectId(req.user._id) });
        res.send(orders);
    } catch (err) {
        next(error)
    }
}

module.exports =  getUserOrders 