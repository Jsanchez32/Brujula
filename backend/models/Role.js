import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
    rol: {
        type: String,
        required : [true, 'El rol es Obligatorio']
    }
});

const Role = mongoose.model('roles',RoleSchema);
export default Role;