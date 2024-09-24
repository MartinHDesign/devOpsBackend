import "reflect-metadata";
import AppDataSource from "./repo/ConnectToDatabase";
import { seedDatabase } from "./repo/SeedDatabaseWithHockeyTeamsAndPlayers";
import express from 'express';
import teamRoutes from "./routes/teamRoutes";
import cors from 'cors';
import { teamsExistsInDatabase } from "./repo/checkIfDatabaseIsEmpty";

const server = express()
const port = process.env.EXPRESS_PORT || 3000;

server.use(cors({
    origin: '*', 
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
}));

server.use(express.json());

server.use("/", teamRoutes);



AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");

        const databaseHaveTeams = await teamsExistsInDatabase();

        
        if(!databaseHaveTeams){ 
            seedDatabase();
        } 

        server.listen(port, () => {
            console.log("server is running");
            
        })
        
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

    


    