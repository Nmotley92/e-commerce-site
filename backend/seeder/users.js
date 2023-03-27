const bcrypt = require("bcryptjs")

const users = [
  {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
    name: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    password: bcrypt.hashSync('john@doe.com', 10),
  },
  {
    name: "Dalton",
    lastName: "admin",
    email: "dalton@admin.com",
    password: bcrypt.hashSync("Dadmin", 10),
    isAdmin: true
  }
]

module.exports = users
