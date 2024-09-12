import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestClass{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string; 

    @Column()
    description!: string; 


}