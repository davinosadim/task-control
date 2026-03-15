import { AppDataSource } from "../database/data-source.js"
import { User } from "../entities/User.js"
import type { CreateUserDto } from "../validations/userValidation.js"

const userRepository = AppDataSource.getRepository(User)

export class UserService {
    async create(userData: CreateUserDto): Promise<User> {
        const newUser = userRepository.create(userData)
        await userRepository.save(newUser)
        return newUser
    }

    async findAll(): Promise<User[]>{
        return userRepository.find()
    }

    async findById(id: number): Promise<User | null>{
        return userRepository.findOneBy({id})
    }

    async delete(id: number): Promise<void>{
        await userRepository.delete(id)
    }
}