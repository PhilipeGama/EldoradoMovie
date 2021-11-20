import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repository/UserRepository";

class UserController {
    async auth(request: Request, response: Response){
        const userRespository = getCustomRepository(UserRepository);

        const user = await userRespository.findByEmail(request.body.email);
        console.log(user);
    }
}