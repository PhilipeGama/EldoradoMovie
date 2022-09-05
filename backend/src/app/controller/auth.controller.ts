import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/user.repository';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthController {
	async auth(request: Request, response: Response) {
		const userRespository = getCustomRepository(UserRepository);

		const user = await userRespository.findByEmail(request.body.email);

		if (typeof user === 'undefined') {
			return response.json({
				fail: 'fail',
				data: {
					title: 'Email não encontrado',
				},
			});
		}

		const passwordIsValid = await bcrypt.compare(
			request.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return response.status(401).json({
				fail: 'fail',
				data: {
					title: 'Senha inválida',
				},
			});
		}

		delete user.password;
		delete user.createdAt;
		delete user.updatedAt;

		const token = sign({ user }, 'secret_key', {
			expiresIn: '1d',
		});

		return response.json({
			status: 'sucess',
			data: {
				user,
				token,
			},
		});
	}
}

export default new AuthController();