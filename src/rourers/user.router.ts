import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.post(
  "/",
  commonMiddleware.validateBody(UserValidator.createUser),
  userController.create,
);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);

router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  commonMiddleware.validateBody(UserValidator.updateUser),
  userController.updateById,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.deleteById,
);

export const userRouter = router;
