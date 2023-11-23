const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (user) => {
    const newUser = new User(user);
    return res.json({
      resp: {
        msg: "Ingresaste con éxito",
        token,
        userData: req.session.userData,
      },
    });
};

module.exports = {
  login,
};