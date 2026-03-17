import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { validate } from "../middlewares/validationsMiddleware.js";
import { createUserSchema } from "../validations/userValidation.js";

const router = Router()
const userController = new UserController()

router.post("/user", validate(createUserSchema), userController.createUser)

router.get("users", userController.findAll)

export default router