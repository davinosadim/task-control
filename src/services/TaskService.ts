import { AppDataSource } from "../database/data-source.js";
import { Task } from "../entities/Task.js";
import { User } from "../entities/User.js";
import type { CreateTaskDto } from "../validations/taskValidation.js";

const taskRepository = AppDataSource.getRepository(Task)
const userRepository = AppDataSource.getRepository(User)

export class TaskService {
    async create(taskData: CreateTaskDto): Promise<Task>{
        const findUser = await userRepository.findOneBy({id: taskData.userId})

        if(!findUser){
            throw new Error("Não é possível criar uma tarefa para um usuário não cadastrado")
        }

        const newTaskData: Partial<Task> = {
            title: taskData.title,
            description: taskData.description,
            user: findUser
        }

        const newTask = taskRepository.create(newTaskData)

        await taskRepository.save(newTask)
        return newTask

    }

}