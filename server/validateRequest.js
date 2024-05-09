const joi = require("joi");

const validateRegister = joi.object({
  email: joi.string().required(),
  username: joi.string().min(5).required(),
  password: joi.string().required(),
});

module.exports = validateRegister;
