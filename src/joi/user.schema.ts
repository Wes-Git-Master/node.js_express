import Joi from "joi";

import { RoleEnum } from "../enums/role.enum";

export const userSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().min(3).required(),
  age: Joi.number().integer().min(0).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .optional(),
  role: Joi.string().valid(RoleEnum.USER, RoleEnum.ADMIN).required(),
});
