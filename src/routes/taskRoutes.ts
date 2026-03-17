import { Router } from "express";
import { TaskController } from "../controllers/TaskController.js";
import { validate } from "../middlewares/validationsMiddleware.js";
import { createTaskSchema } from "../validations/taskValidation.js";

const router = Router()
const taskController = new TaskController()

router.post("/tasks", validate(createTaskSchema), taskController.createTask)

