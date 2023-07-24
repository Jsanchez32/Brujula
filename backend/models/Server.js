import express from "express";
import cors from "cors";

class Server {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.port = process.env.PORT;

        //Middlewares//
        this.middlewares();

        //Routes//
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
    };

    routes(){

    };

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running in port ${this.port}`);
        })
    };
}


export default Server;
