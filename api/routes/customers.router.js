const router = require("express").Router();
const { authUser } = require("../utils");

const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

router.post("/", authUser, createCustomer);
router.get("/", authUser, getAllCustomers);
router.get("/:id", authUser, getCustomerById);
router.put("/:id", authUser, updateCustomer);
router.delete("/:id", authUser, deleteCustomer);

module.exports = router;
