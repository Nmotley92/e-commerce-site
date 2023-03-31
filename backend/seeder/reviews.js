const ObjectId = require("mongodb").ObjectId

const reviews = [
    {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 5,
    user: { _id: ObjectId(), name: "John Doe" },
  },
  {
    comment: "Absolutely captivating! This book made me question everything I thought I knew about the meaning of life. Highly recommend.",
    rating: 5, 
    user: { _id: ObjectId(), name: "Alice Smith" }
  },
  {
    comment: "Krakauer's writing is superb, and his exploration of McCandless's life and death is both moving and thought-provoking. A must-read for anyone who loves adventure and the great outdoors.", 
    rating: 4, 
    user: { _id: ObjectId(), name: "Bob Johnson" }
  },
  {
    comment: "I couldn't put this book down! McCandless's story is tragic and inspiring, and Krakauer does an excellent job of bringing it to life. Highly recommend to anyone who loves a good adventure story.", 
    rating: 5, 
    user: { _id: ObjectId(), name: "Emma Brown" }
  },
  {
    comment: "Into the Wild is a fascinating read that will leave you thinking long after you finish the last page. Highly recommend for anyone interested in nature, adventure, or the human condition.",
    rating: 4.5,
    user: { _id: ObjectId(), name: "Michael Lee" }
  },
  {
    comment: "This book is a masterpiece. Krakauer's writing is beautiful and haunting, and McCandless's story is both tragic and inspiring. Highly recommend to anyone who loves a good memoir.",
    rating: 5, 
    user: { _id: ObjectId(), name: "Sophie Chen" }
  },
  {
    comment: "Matthiessen's journey through the Himalayas is mesmerizing, and his search for the elusive snow leopard is both fascinating and spiritual. Highly recommend to anyone who loves travel and adventure.", 
    rating: 4,
    user: { _id: ObjectId(), name: "David Kim" }
  },
  {
    comment: "The Snow Leopard is a beautiful and haunting memoir that will stay with you long after you finish it. Matthiessen's writing is exquisite, and his search for the snow leopard is both adventurous and deeply spiritual. Highly recommend.",
    rating: 5, 
    user: { _id: ObjectId(), name: "Jennifer Wu" }
  },
  {
    comment: "This book is a masterpiece of travel writing. Matthiessen's journey through the Himalayas is both fascinating and awe-inspiring, and his search for the snow leopard is deeply spiritual. Highly recommend.",
    rating: 4.5, 
    user: { _id: ObjectId(), name: "Kevin Lee" }
  },
  {
    comment: "The Snow Leopard is a beautiful and moving memoir that will transport you to another world. Matthiessen's writing is superb, and his journey through the Himalayas is both adventurous and deeply spiritual. Highly recommend.",
    rating: 5, 
    user: { _id: ObjectId(), name: "Ava Davis" }
  },
  {
    comment: "If you love travel and adventure, you won't want to miss The Snow Leopard. Matthiessen's writing is breathtaking, and his search for the elusive snow leopard is both thrilling and deeply spiritual. Highly recommend.",
    rating: 4, 
    user: { _id: ObjectId(), name: "Noah Brown" }
  },
]

module.exports = reviews
