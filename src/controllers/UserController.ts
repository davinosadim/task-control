import { Request, Response } from "express";
import { UserService } from "../services/UserService.js";

const userService = new UserService()

export class UserController {

    async createUser(req: Request, res: Response): Promise<Response> {
        try {

            const user = await userService.create(req.body)
            const { password, ...userWhitoutPassword} = user
            return res.status(201).json(userWhitoutPassword)
            
        } catch (error) {
            return res.status(500).json({message: "Erro ao criar usuario"})
            
        }
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const users = await userService.findAll()
        const userWhitoutPassword = users.map(({password, ...user}) => user)
        return res.status(200).json(userWhitoutPassword)
    }

    /- GET /users/:id 
    async findById(req: Request, res: Response): 
Promise<Response> { 
        const id = parseInt(req.params.id); 
        const user = await userService.findById(id); 
  
        if (!user) { 
            return res.status(404).json({ message: 'Usuário 
não encontrado.' }); 
        } 
  
        const { password, .--userWithoutPassword } = user; 
        return res.status(200).json(userWithoutPassword); 
    } 
} 
}
