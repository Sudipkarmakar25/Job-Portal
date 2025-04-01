const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});


AdminRequestSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


AdminRequestSchema.methods.generateAuthToken = function () {
  const payload = {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
  };


  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d", 
  });

  return token;
};

module.exports = mongoose.model("AdminRequest", AdminRequestSchema);
