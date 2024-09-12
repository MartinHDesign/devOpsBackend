"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // Required by TypeORM
const database_1 = __importDefault(require("./repo/database"));
database_1.default.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    // Your application logic here
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
