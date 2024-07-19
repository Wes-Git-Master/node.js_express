import { NextFunction, Request, Response } from "express";
import Joi from "joi";

import { ApiError } from "../errors/api-error";

class BodyValidationMiddleware {
  public validateBody(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return next(new ApiError(error.details[0].message, 400));
      }
      next();
    };
  }
}

export const validationMiddleware = new BodyValidationMiddleware();
