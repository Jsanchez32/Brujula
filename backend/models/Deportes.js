import mongoose from "mongoose";
const {Schema} = mongoose;
const deportesSchema = mongoose.Schema({
    deporte:{
        type:String,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true    
    },
    precio:{
        type:Number,
        require:true,
        trim:true    
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'categorias',
        required: true
    }
})

const Deportes = mongoose.model('deportes',deportesSchema);
export default Deportes;