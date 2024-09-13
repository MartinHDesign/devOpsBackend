import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Player } from "./Player";

@Entity()
export class Teams{
    @PrimaryGeneratedColumn("uuid")
    id!:number;

    @Column()
    name!:string;

    @Column()
    logo!:string;

    @OneToMany(() => Player, (player) => player.team)
    players!:Player[];

}