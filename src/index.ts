import "reflect-metadata"; // Required by TypeORM
import AppDataSource from "./repo/ConnectToDatabase";
import { seedDatabase } from "./repo/SeedDatabaseWithHockeyTeamsAndPlayers";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        
        // Your application logic here
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

    seedDatabase();