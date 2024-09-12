import { DataSource } from "typeorm";
import { TestClass } from "../entities/test";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, 
    logging: true,
    entities: [TestClass],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;