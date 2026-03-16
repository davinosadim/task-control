import { Request, Response } from "express";
import { TaskService } from "../services/TaskService.js";
import { time } from "node:console";
import { title } from "node:process";

const taskService = new TaskService()

export class TaskController {

    async createTask(req: Request, res: Response): Promise<Response> {
        try {

            const task = await taskService.create(req.body)

            return res.status(201).json({
                title: task.title,
                description: task.description,
                user_id: task.id
            })
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao criar task"
            })
            
        }
    }
}