import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthController {
    async auth(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);

        const user = await userRespository.findByEmail(request.body.email);

        if(typeof user === 'undefined'){
            return response.json({
                fail : "fail",
                data: {
                    title: "Email não encontrado"
                }
            })
        }

        const passwordIsValid = await bcrypt.compare(request.body.password,user.password);
        
        if(!passwordIsValid){
            return response.json({
                fail : "fail",
                data: {
                    title: "Senha inválida"
                }
            })
        }

        console.log(user);

        delete user.password;
        delete user.created_at;
        delete user.updated_at;
        
        console.log(user);

        const token = sign({user},
            'secret_key', {
                expiresIn: '1d'
        })
        
        console.log(token);

        return response.json(token);
    }

    async postUser(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);
        
        
        
    }

    async getAllUsers(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);

        const user = await userRespository.findAll();

        return response.status(201).json(user);

    }
}

export default new AuthController;