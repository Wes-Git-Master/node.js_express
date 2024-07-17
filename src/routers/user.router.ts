import { NextFunction, Request, Response, Router } from "express";

import { ApiError } from "../errors/api-error";
import { userService } from "../services/user.service";

//===========================================================================================================

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getList();
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dto = req.body as any;
    const newUser = await userService.create(dto);
    res.status(201).json(newUser);
  } catch (e) {
    next(e);
  }
});

router.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.userId);
      const users = await userService.getList();
      const user = users.find((user) => user.id === userId);
      if (!user) {
        throw new ApiError("User not found", 404);
      }
      res.json(user);
    } catch (e) {
      next(e);
    }
  },
);

router.put(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.userId);
      const { name, email, password } = req.body;

      const updatedUser = await userService.update(userId, {
        name,
        email,
        password,
      });
      res.status(200).json(updatedUser);
    } catch (e) {
      next(e);
    }
  },
);

router.delete(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.userId);
      await userService.delete(userId);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },
);

export const userRouter = router;
