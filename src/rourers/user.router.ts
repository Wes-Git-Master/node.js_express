import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.get("/me", authMiddleware.checkAccessToken, userController.getMe);

router.put(
  "/me",
  authMiddleware.checkAccessToken,
  // commonMiddleware.isIdValid("me"),
  // commonMiddleware.doesIdExist("me"),
  commonMiddleware.isBodyValid(UserValidator.updateUser),
  userController.updateMe,
);

router.delete(
  "/me",
  authMiddleware.checkAccessToken,
  // commonMiddleware.isIdValid("userId"),
  // commonMiddleware.doesUserExist("userId"),
  userController.deleteMe,
);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);

export const userRouter = router;
