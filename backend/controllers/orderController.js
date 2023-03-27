const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const ObjectId = require("mongodb").ObjectId;

// gets all orders of a specific user admin route
const getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: ObjectId(req.user._id) });
        res.send(orders);
    } catch (error) {
        next(error)
    }
}

// gets a specific order by id
const getOrder = async (req, res, next) => {
    try {
       const order = await Order.findById(req.params.id).populate("user", "-password -isAdmin -_id -__v -createdAt -updatedAt").orFail();
        res.send(order);
    } catch (error) {
        next(error)
    }
}

// creates a new order and updates the sales of the products in the order in the database
const createOrder = async (req, res, next) => {
    try {
        const { cartItems, orderTotal, paymentMethod } = req.body;
        if (!cartItems || !orderTotal || !paymentMethod) {
            res.status(400).send( "All fields are required" );
        }

        let ids = cartItems.map((item) => {
            return item.productID;
        })

        let qty = cartItems.map((item) => {
            return Number(item.quantity);
        })

        await Product.find({ _id: { $in: ids } }).then((products) => {
            products.forEach(function (product, idx) {
                product.sales += qty[idx];
                product.save();
            })
        })

        const order = new Order({
            user: ObjectId(req.user._id),
            orderTotal: orderTotal,
            cartItems: cartItems,
            paymentMethod: paymentMethod,
        })

        const createdOrder = await order.save();
        res.status(201).send(createdOrder);
    } catch (error) {
        next(error)
    }
};

// updates the order to isPaid: true
const updateOrderToPaid = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).orFail();
        order.isPaid = true;
        order.paidAt = Date.now();

        const updatedOrder = await order.save();
        res.send(updatedOrder);

    } catch (error) {
        next(error)
    }
};

// updates the order to isDelivered: true
const updateOrderToDelivered = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).orFail();
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.send(updatedOrder);

    } catch (error) {
        next(error)
    }
};

module.exports =  { getUserOrders, getOrder, createOrder, updateOrderToPaid, updateOrderToDelivered }