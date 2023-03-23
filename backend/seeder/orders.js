const ObjectId = require("mongodb").ObjectId

const orders = Array.from({length: 22}).map((_, idx) => {
    let day = 20
    if(idx < 10) {
        var hour = "0" + idx
        var subtotal = 100
    } else if(idx > 16 && idx < 21) {
        var hour = idx
        var subtotal = 100 + 12*idx
    } else {
        var hour = idx
        var subtotal = 100
    }
    return {
        user:ObjectId(),
        orderTotal: {
            itemsCount: 3,
            cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Product name",
                price: 34,
                image: {path: "/images/tablets-category.png"},
                quantity: 532,
                count: 65
            }
        ],
        paymentMethod: "PayPal",
        isPaid: false,
        isDelivered: false,
        createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`
    }
})

module.exports = orders
