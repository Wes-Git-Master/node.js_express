import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { isObjectIdOrHexString } from "mongoose";

import { ApiError } from "../errors/api-error";
import { User } from "../models/user.model";

class CommonMiddleware {
  public isIdValid(paramName: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[paramName];
        if (!isObjectIdOrHexString(id)) {
          throw new ApiError("Invalid id", 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }

  public doesIdExist(userId: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[userId];
        const foundObjectById = await User.findById(id);
        if (!foundObjectById) {
          throw new ApiError("Invalid id", 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }

  public doesUserExist(userId: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params[userId];
        const foundObjectById = await User.findById(id);
        if (!foundObjectById) {
          throw new ApiError(`User"${id}"deleted`, 201);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }

  public isBodyValid(schema: Joi.ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = await schema.validateAsync(req.body);
        next();
      } catch (e) {
        next(new ApiError(e.details[0].message, 400));
      }
    };
  }
}

export const commonMiddleware = new CommonMiddleware();
