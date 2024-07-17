import { NextFunction, Request, Response } from "express";

import { userService } from "../services/user.service";

//===========================================================================================================

class UserController {
  public async getList(res: Response, next: NextFunction) {
    try {
      const result = await userService.getList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as any;
      const result = await userService.create(dto);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);
      const user = await userService.getById(userId);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);
      const { name, email, password } = req.body;
      const updatedUser = await userService.update(userId, {
        name,
        email,
        password,
      });
      res.json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);
      await userService.delete(userId);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
