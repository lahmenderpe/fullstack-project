import joi from "joi";

export const validateRegister = joi.object({
  name: joi.string().required(),
  username: joi.string().min(5).required(),
  password: joi.string().required(),
  createdAt: joi.date(),
  location: joi.string(),
});
