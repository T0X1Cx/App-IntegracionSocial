import { Request,Response } from 'express';
import { Usuario } from '../modelos/usuario.modelo';
import bcrypt from 'bcrypt';
import { Token } from '../clases/Token';


class usuarioController{

    getDatos(req:Request,res:Response){

        console.log(req.query);
        let usuario = req.query.usuario;
        if (usuario) {
            return res.status(200).json({
                status:"Ok",
                message:"El usuario es " + usuario
            });
        } else{
            return res.status(500).json({
                status:"Fail",
                message:"No hay usuario"
            });
        }

    };

    crearUsuario(req:Request, res:Response){

        let u = new Usuario();
        u.usuario = req.body.usuario;
        u.email = req.body.email;
        u.pwd = bcrypt.hashSync(req.body.pwd, 10);
        u.role = ['01'];
        
        Usuario.create(u,(err, usuarioBD)=>{

            if(err){
                console.log(err);
                throw err;
            }else{

                return res.status(200).json({
                    status:"Ok",
                    message:"El usuario creado es " + usuarioBD.usuario,
                    usuario:{

                        _id: usuarioBD._id,
                        usuario: usuarioBD.usuario,
                        email: usuarioBD.email
    
                    }
                });
            }
        });
    }

    login(req:Request,res:Response){

        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;
        
        Usuario.findOne({usuario:usuario},null,null,(err,usuarioBD)=>{

            if(err){
                throw err;
            }

            if(usuarioBD){

                if(bcrypt.compareSync(pwd, usuarioBD.pwd)){
                    
                    const usuarioQueMando = new Usuario();
                    usuarioQueMando._id = usuarioBD._id;
                    usuarioQueMando.usuario = usuarioBD.usuario;
                    usuarioQueMando.role = usuarioBD.role;

                    return res.status(200).json({
                        status: 'ok',
                        _id: usuarioBD._id,
                        token: Token.generaToken(usuarioQueMando)
                        
                    });
                }else{
                    return res.status(404).json({

                        status: 'ok',
                        message:'Usuario/Contraseña incorrectos'
                    });
                }

            }else{
                return res.status(404).json({
                    status: 'fail',
                    message: 'Usuario/Contraseña incorrectos'
                });
            }

        });

    };
}

export default usuarioController