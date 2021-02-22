import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ed Maldo",
    email: "ed_maldo@protonmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
