import { z } from "zod"
import { Status } from "../entities/Task.js"

export const createTaskSchema = z.object({
    title: z.string().trim().min(1, "Insira ao menos 1 caracter").max(100, "O titulo deve ter no maximo 100 caracteres"),
    description: z.string().trim().min(1, "Insira uma descricao").max(250, "A descricao deve ter no maximo 250 caracteres"),
    userId: z.number().int().positive("O userId deve ser um numero positivo"),
    status: z.enum(Status).optional()
})

export type CreateTaskDto = z.infer<typeof createTaskSchema>

export const updateTaskSchema = z.object({
    title: z.string().trim().min(1, "Insira ao menos 1 caracter").max(100, "O titulo deve ter no maximo 100 caracteres").optional(),
    description: z.string().trim().min(1, "Insira uma descricao").max(250, "A descricao deve ter no maximo 250 caracteres").optional(),
    status: z.enum(Status).optional()


})