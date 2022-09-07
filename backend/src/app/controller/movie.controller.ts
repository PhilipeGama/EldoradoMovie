import { Request, Response } from 'express';
import Movie from '../entity/movie.entity';

import MovieRepository from '../repository/movie.repository';
import { getCustomRepository } from 'typeorm';

import { unlink } from 'fs';
import path from 'path';

class MovieController {
	async getMovieByID(request: Request, response: Response) {
		const movieRepository = getCustomRepository(MovieRepository);
		const { id } = request.params;
		const movie = await movieRepository.findById(id);

		return response.json(movie);
	}

	async getAllMovies(request: Request, response: Response) {
		const movieRepository = getCustomRepository(MovieRepository);
		const movie = await movieRepository.findAll();
		return response.json(movie);
	}

	async postMovie(request: Request, response: Response) {
		try {
			const movieRepository = getCustomRepository(MovieRepository);
			const movieAlreadyExists = await movieRepository.findByName(
				request.body.name
			);

			if (typeof movieAlreadyExists !== 'undefined') {
				response.status(409).json({
					title: 'Um filme com o mesmo nome já existe no banco de dados!',
				});
			}

			let movie = new Movie();

			movie.name = request.body.name;
			movie.synopsis = request.body.synopsis;
			movie.trailer = request.body.trailer;
			movie.releaseDate = request.body.releaseDate;
			movie.boxOffice = request.body.boxOffice;
			movie.poster = request.body.poster;
			movie.gender = request.body.gender;

			movie = await movieRepository.save(movie);

			return response.status(201).json({
				title: 'Filme cadastrado com sucesso!',
			});
		} catch (error) {
			return response.status(400).json({
				error: error.message,
			});
		}
	}

	public async putMovie(request: Request, response: Response) {
		const movieRepository = getCustomRepository(MovieRepository);
		const { id } = request.params;
		const movie = await movieRepository.findById(id);

		console.log(request.body);
		const fullpath = './public/static/uploads/';

		if (request.body.poster) {
			unlink(path.join(fullpath, movie.poster), (err) => {
				err;
			});
			movie.poster = request.body.poster;
		}

		movie.name = request.body.name;
		movie.synopsis = request.body.synopsis;
		movie.trailer = request.body.trailer;
		movie.releaseDate = request.body.releaseDate;
		movie.boxOffice = request.body.boxOffice;

		movie.gender = request.body.gender;

		delete movie.fullPath;

		movieRepository.update(id, movie);

		response.status(200).json({
			title: 'Filme atualizado com successo',
		});
	}

	public async deleteMovie(request: Request, response: Response) {
		const movieRepository = getCustomRepository(MovieRepository);
		const { id } = request.params;
		const movie = await movieRepository.findById(id);
		const fullpath = './public/static/uploads/';

		delete movie.fullPath;

		await movieRepository.delete({ id: movie.id }).then(() => {
			unlink(path.join(fullpath, movie.poster), (err) => {
				if (err) throw err;
			});
		});

		response.status(200).json({
			title: 'Filme deletado com sucesso',
		});
	}
}

export default new MovieController();
