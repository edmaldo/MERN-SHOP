import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("dev_password", 10),
    isAdmin: true,
  },
  {
    name: "User One",
    email: "user1@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Two",
    email: "user2@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Three",
    email: "user3@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Four",
    email: "user4@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Five",
    email: "user5@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Six",
    email: "user6@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Seven",
    email: "user7@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
  {
    name: "User Eight",
    email: "user8@example.com",
    password: bcrypt.hashSync("dev_password", 10),
  },
]

export default users
