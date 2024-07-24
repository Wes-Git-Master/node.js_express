import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);

router.put(
  "/:userId",
  authMiddleware.checkAccessToken,
  commonMiddleware.isIdValid("userId"),
  commonMiddleware.doesIdExist("userId"),
  commonMiddleware.isBodyValid(UserValidator.updateUser),
  userController.updateById,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  commonMiddleware.doesUserExist("userId"),
  userController.deleteById,
);

export const userRouter = router;
