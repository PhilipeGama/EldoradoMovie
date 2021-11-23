import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";
import User from "../entity/User";

class UserController {

    async postUser(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);
    
        let user = new User();

        user.name = request.body.name;
        user.email = request.body.email;
        user.password = request.body.password;

        await userRespository.save(user);

        return response.json(user);
    }

    async getAllUsers(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);

        const user = await userRespository.findAll();

        return response.status(201).json(user);

    }
}

export default new UserController;