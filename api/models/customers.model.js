const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "id is required"],
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  surname: {
    type: String,
    required: [true, "surname is required"],
  },
  photo: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const customerModel = mongoose.model("customer", customerSchema);
module.exports = customerModel;
