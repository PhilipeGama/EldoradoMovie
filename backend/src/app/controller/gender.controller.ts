import { Request, Response } from "express";

import { getCustomRepository } from "typeorm";
import Gender from "../entity/gender.entity";
import GenderRepository from "../repository/gender.repository";

class GenderController {
    async getAllGender(request: Request, response: Response) {
        const genderRepository = getCustomRepository(GenderRepository);
        const gender = await genderRepository.findAll();
        
        return response.json(gender);
    }

    async postGender(request: Request, response: Response){
        const genderRepository = getCustomRepository(GenderRepository);
        
        let gender = new Gender();
        gender.name = request.body.name;
        genderRepository.save(gender);

        return response.json(gender);
    }

    async putGender(request: Request, response: Response){
        const genderRepository = getCustomRepository(GenderRepository);
        
        const { id } = request.body;
        let gender = new Gender();
        gender.name = request.body.name;
        genderRepository.update(id, gender);
        
        return response.json(gender);
    }
}


export default new GenderController();