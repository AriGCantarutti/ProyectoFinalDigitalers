const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  email: {
    type: String,
    required: [true, "Este campo es requerido"],
  },

  password: {
    type: String,
    required: [true, "Este campo es requerido"],
  },
});

module.exports = model("User", userSchema);