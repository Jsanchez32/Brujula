import express from "express";
import cors from "cors";
import reservacionesRouter from "../routes/reservaciones.routes.js";
import usuariosRouter from "../routes/usuarios.routes.js";
import loginRouter from "../routes/login.routes.js";
import searchRouter from "../routes/search.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.port = process.env.PORT;

        this.reservacionPath = "/reservaciones";
        this.usuarioPath = "/usuarios";
        this.loginPath = "/login";
        this.searchPath = "/search";

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
        this.app.use(this.usuarioPath,usuariosRouter);
        this.app.use(this.loginPath,loginRouter);
        this.app.use(this.searchPath, searchRouter);
    };

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Running in port ${this.port}`);
        })
    };
}


export default Server;
