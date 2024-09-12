import "reflect-metadata"; // Required by TypeORM
import AppDataSource from "./repo/database";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        // Your application logic here
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });