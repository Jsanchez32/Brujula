const isAdminRole = ( req, res, next ) => {

    if ( !req.usuarios ) {
       return res.status(500).json({
           msg: 'Se quiere verificar el role sin validar el token primero'
       });
   } 

   const { rol, username } = req.usuarios;
   
   if ( rol !== 'admin' ) {
       return res.status(401).json({
           msg: `${ username } no es administrador - No puede hacer esto`
       });
   }

   next();
}


export {isAdminRole}