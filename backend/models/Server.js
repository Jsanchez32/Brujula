import express from "express";
import cors from "cors";
import reservacionesRouter from "../routes/reservaciones.routes.js"

class Server {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.port = process.env.PORT;

        this.reservacionPath = "/reservacion";

        //Middlewares//
        this.middlewares();

        //Routes//
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
    };

    routes(){
        this.app.use(this.reservacionPath,reservacionesRouter);
    };

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running in port ${this.port}`);
        })
    };
}


export default Server;
