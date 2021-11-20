import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";
import bcrypt from 'bcryptjs';

class UserController {
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


        return response.json(user);
    }

    async getAllUsers(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);

        const user = await userRespository.findAll();

        return response.status(201).json(user);

    }
}

export default new UserController;