import { Request, Response } from "express";

import { getCustomRepository } from "typeorm";
import GenderRepository from "../repository/GenderRepository";

class GenderController {



    async getAllGender(request: Request, response: Response) {
        const genderRepository = getCustomRepository(GenderRepository);

        const gender = await genderRepository.findAll();

        return response.json(gender);

    }


}


export default new GenderController();