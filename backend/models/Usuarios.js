import mongoose from "mongoose";

const UsuariosSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    rol:{
        type: String,
        require: true,
        default: 'user'
    },
    estado:{
        type:Boolean,
        default: true
    }
})

const Usuarios = mongoose.model('usuarios',UsuariosSchema);
export default Usuarios;