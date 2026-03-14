import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User.js";

export enum Status {
  PENDING = "pendente",
  IN_PROGRESS = "em_andamento",
  DONE = "finalizado"
}

@Entity("tasks")
export class Task {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({length: 100})
    title!: string

    @Column({length: 200})
    description!: string

    @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING
  })
    status!: Status;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({name: "user_id"})
    user!: User

    @CreateDateColumn({name: "created_at"})
    createdAt!: Date

    @UpdateDateColumn({name: "updated_at"})
    updatedAt!: Date

}