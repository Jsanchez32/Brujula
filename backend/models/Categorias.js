import mongoose from 'mongoose';

const categoriasSchema = mongoose.Schema({
    categoriaDeporte:{
        type: String
    }
});

const Categorias = mongoose.model('categorias', categoriasSchema);

export default Categorias;