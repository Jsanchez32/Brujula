import dotenv from "dotenv";
import Server from "./models/Server.js";
import conectarDB from "./config/config.js";

dotenv.config();
const server = new Server;
conectarDB();
server.listen();