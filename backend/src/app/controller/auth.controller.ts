import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/user.repository';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class AuthController {
	async auth(request: Request, response: Response) {
		const userRespository = getCustomRepository(UserRepository);

		if (request.body.email == '' || request.body.password == '') {
			return response.status(401).json({
				fail: 'fail',
				data: {
					title: 'Campo Login e Senha obrigatório!',
				},
			});
		}

		const user = await userRespository.findByEmail(request.body.email);

		if (typeof user === 'undefined') {
			console.log(user);
			return response.status(401).json({
				fail: 'fail',
				data: {
					title: 'Login/Senha inválida!',
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
					title: 'Login/Senha inválida!',
				},
			});
		}

		delete user.password;
		delete user.createdAt;
		delete user.updatedAt;

		const token = sign({ user }, 'secret_key', {
			expiresIn: '1d',
		});

		user.token = token;
		return response.json({
			...user,
		});
	}
}

export default new AuthController();
