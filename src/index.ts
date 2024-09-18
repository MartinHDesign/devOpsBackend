import "reflect-metadata";
import AppDataSource from "./repo/ConnectToDatabase";
import { seedDatabase } from "./repo/SeedDatabaseWithHockeyTeamsAndPlayers";
import express from 'express';
import teamRoutes from "./routes/teamRoutes";
import cors from 'cors';

const server = express()
const port = process.env.EXPRESS_PORT || 3000;

server.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
}));

server.use(express.json());

server.use("/", teamRoutes);

const seedDB = false;
if(seedDB){ 
        seedDatabase();
    }

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        server.listen(port, () => {
            console.log("server is running");
            
        })
        
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

    


    