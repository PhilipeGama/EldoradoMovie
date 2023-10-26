import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repository/user.repository';

class AuthController {
	async auth(request: Request, response: Response) {
		const userRespository = getCustomRepository(UserRepository);

		if (request.body.email == '' || request.body.password == '') {
			return response.status(401).json({
				title: 'Email and password is required!',
			});
		}

		const user = await userRespository.findByEmail(request.body.email);

		if (typeof user === 'undefined') {
			return response.status(401).json({
				title: 'Login failed',
			});
		}

		const passwordIsValid = await bcrypt.compare(
			request.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return response.status(401).json({
				title: 'Login failed',
			});
		}

		delete user.password;
		delete user.createdAt;
		delete user.updatedAt;

		const token = sign({ user }, 'secret_key', {
			expiresIn: '1d',
		});

		return response.json({
			token,
		});
	}
}

export default new AuthController();
