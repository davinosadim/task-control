import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Task } from "./Task.js";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 50})
    name!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    password!: string;

    @CreateDateColumn({name: "created_at"})
    createdAt!: Date;

    @OneToMany(() => Task, (task) => task.user)
    tasks!: Task[]

}