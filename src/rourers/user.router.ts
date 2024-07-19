import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userSchema } from "../joi/user.schema";
import { userUpdateSchema } from "../joi/user.update.schema";
import { validationMiddleware } from "../middlewares/body.validation.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.get("/", userController.getList);

router.post(
  "/",
  validationMiddleware.validateBody(userSchema),
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
  validationMiddleware.validateBody(userUpdateSchema),
  userController.updateById,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.deleteById,
);

export const userRouter = router;
