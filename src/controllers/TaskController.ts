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

    async findTasks(req: Request, res: Response): Promise<Response> {
        try {

            const userId = Number(req.params.id)

            const tasks = await taskService.findTask(userId)

            if(tasks.length === 0){
                return res.status(200).json({
                    message: "Nao ha tarefas cadastradas",
                    data: []
                })
            }

            return res.status(200).json({
                data: tasks
            })
            
        } catch (error) {
            return res.status(404).json({
                message: error
            })
            
        }
    }
}