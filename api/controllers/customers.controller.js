const CustomerModel = require("../models/customers.model");
const { handleError } = require("../utils");

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};

function createCustomer(req, res) {
  console.log(req.body);
  CustomerModel.create({
    _id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    photo: req.body.photo,
  })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function getAllCustomers(req, res) {
  CustomerModel.find()
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function getCustomerById(req, res) {
  CustomerModel.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function updateCustomer(req, res) {
  CustomerModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}

function deleteCustomer(req, res) {
  CustomerModel.remove({ _id: req.params.id })
    .then((response) => res.json(response))
    .catch((err) => handleError(err, res));
}
