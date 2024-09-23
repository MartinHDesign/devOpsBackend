import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Player } from "../entities/Player";
import { Teams } from "../entities/Teams";

dotenv.config();


const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, 
    ssl: {
        rejectUnauthorized: false,
    },
    logging: true,
    entities: [Teams,Player],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;