import { Request, Response } from 'express';

import { getCustomRepository } from 'typeorm';
import Gender from '../entity/gender.entity';
import GenderRepository from '../repository/gender.repository';

class GenderController {
	async getAllGender(request: Request, response: Response) {
		const genderRepository = getCustomRepository(GenderRepository);
		const gender = await genderRepository.findAll();

		return response.json(gender);
	}

	async postGender(request: Request, response: Response) {
		const genderRepository = getCustomRepository(GenderRepository);

		const gender = new Gender();
		gender.name = request.body.name;
		genderRepository
			.save(gender)
			.then(() => {
				return response.status(201).json({
					title: 'Gênero cadastrado com sucesso!',
				});
			})
			.catch((error) => {
				return response.status(400).json({
					title: error.sqlMessage,
				});
			});
	}

	async putGender(request: Request, response: Response) {
		const genderRepository = getCustomRepository(GenderRepository);

		const { id } = request.body;
		const gender = new Gender();
		gender.name = request.body.name;
		genderRepository
			.update(id, gender)
			.then(() => {
				return response.status(200).json({
					title: 'Gênero atualizado com sucesso!',
				});
			})
			.catch((error) => {
				return response.status(401).json({
					title: error.sqlMessage,
				});
			});

		return response.json(gender);
	}
}

export default new GenderController();
