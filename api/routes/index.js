const router = require("express").Router();

const usersRouter = require("./users.router");
const authRouter = require("./auth.router");
const customersRouter = require("./customers.router");
const { authUser } = require("../utils"); // Authenticated Route

router
  .use("/users", usersRouter)
  .use("/auth", authRouter)
  .use("/customers", customersRouter);

module.exports = router;
