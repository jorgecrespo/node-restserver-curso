const jwt = require('jsonwebtoken');


//===================
// Verifica Token
//===================


let verificaToken = (req, res, next) => {

    let token = req.get('token'); // o autorization...

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido.'
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });
};





//===================
// Verifica Token
//===================


let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador.'
            }
        });
    }

    next();




}










module.exports = {
    verificaToken,
    verificaAdmin_Role
};