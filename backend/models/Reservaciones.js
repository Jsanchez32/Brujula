import mongoose from "mongoose";
const {Schema} = mongoose;
const reservacionesSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:String,
        require:true,
        trim:true    
    },
    correo:{
        type:String,
        require:true,
        trim:true
    },
    fecha:{
        type:String,
        require:true,
        trim:true
    },
    cantidadPersonas:{
        type:Number,
        require:true,
        trim:true
    },
    plan:{
        type:String,
        require:true,
        trim:true
    },
    estado:{
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    total:{
        type: Number,
        require:true,
        ref: 'deportes'
    }

});
const Reservaciones = mongoose.model('reservaciones',reservacionesSchema);

export default Reservaciones;