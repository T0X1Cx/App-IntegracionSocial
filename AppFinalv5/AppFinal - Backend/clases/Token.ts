import dotenv from 'dotenv'
import express from 'express';
import jwt from 'jsonwebtoken'

export class Token {
    
    public static datos:any = dotenv.config();
    public static claveSecreta = Token.datos.parsed.SECRETO;
    public static caducidad = '1y';

    constructor(){

    }

    static generaToken(payload:any):string{

        return jwt.sign({
            usuario:payload
        },this.claveSecreta, {
            expiresIn: this.caducidad
        });

    }

}