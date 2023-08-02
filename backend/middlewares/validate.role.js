const isAdminRole = (req,res,next)=>{

    if(!req.usuario){
        return res.status(404).json({
            msg:'Se requiere verificar el rol'
        })
    }

    const {rol,username} = req.usuario;
    
    if(rol !='admin'){
        return res.status(404).json({
            msg:`${username} no es administrador - No se puede validar la accion`
        })
    }
    next();
}


export {
    isAdminRole
}