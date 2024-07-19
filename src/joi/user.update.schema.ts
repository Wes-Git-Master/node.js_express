import Joi from "joi";

import { RoleEnum } from "../enums/role.enum";

export const userUpdateSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  age: Joi.number().integer().min(0).optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .optional(),
  role: Joi.string().valid(RoleEnum.USER, RoleEnum.ADMIN).optional(),
});
