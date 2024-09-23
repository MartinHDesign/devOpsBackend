import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teams } from "./Teams";

@Entity()
export class Player{
    @PrimaryGeneratedColumn("uuid")
    id?:string;

    @Column()
    number!:number;

    @Column()
    name!:string;

    @Column()
    position!:string;

    @Column()
    picture!:string;

    @ManyToOne(() => Teams, (team) => team.players, { onDelete: "CASCADE", nullable: true })
    team?:Teams;
}
