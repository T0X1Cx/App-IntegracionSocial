"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_modelo_1 = require("../modelos/usuario.modelo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Token_1 = require("../clases/Token");
class usuarioController {
    getDatos(req, res) {
        console.log(req.query);
        let usuario = req.query.usuario;
        if (usuario) {
            return res.status(200).json({
                status: "Ok",
                message: "El usuario es " + usuario
            });
        }
        else {
            return res.status(500).json({
                status: "Fail",
                message: "No hay usuario"
            });
        }
    }
    ;
    crearUsuario(req, res) {
        let u = new usuario_modelo_1.Usuario();
        u.usuario = req.body.usuario;
        u.email = req.body.email;
        u.pwd = bcrypt_1.default.hashSync(req.body.pwd, 10);
        u.role = ['01'];
        usuario_modelo_1.Usuario.create(u, (err, usuarioBD) => {
            if (err) {
                console.log(err);
                throw err;
            }
            else {
                return res.status(200).json({
                    status: "Ok",
                    message: "El usuario creado es " + usuarioBD.usuario,
                    usuario: {
                        _id: usuarioBD._id,
                        usuario: usuarioBD.usuario,
                        email: usuarioBD.email
                    }
                });
            }
        });
    }
    login(req, res) {
        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;
        usuario_modelo_1.Usuario.findOne({ usuario: usuario }, null, null, (err, usuarioBD) => {
            if (err) {
                throw err;
            }
            if (usuarioBD) {
                if (bcrypt_1.default.compareSync(pwd, usuarioBD.pwd)) {
                    const usuarioQueMando = new usuario_modelo_1.Usuario();
                    usuarioQueMando._id = usuarioBD._id;
                    usuarioQueMando.usuario = usuarioBD.usuario;
                    usuarioQueMando.role = usuarioBD.role;
                    return res.status(200).json({
                        status: 'ok',
                        _id: usuarioBD._id,
                        token: Token_1.Token.generaToken(usuarioQueMando)
                    });
                }
                else {
                    return res.status(404).json({
                        status: 'ok',
                        message: 'Usuario/Contraseña incorrectos'
                    });
                }
            }
            else {
                return res.status(404).json({
                    status: 'fail',
                    message: 'Usuario/Contraseña incorrectos'
                });
            }
        });
    }
    ;
}
exports.default = usuarioController;
