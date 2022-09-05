import { Request, Response } from "express";
import Movie from "../entity/movie.entity";

import MovieRepository from "../repository/movie.repository";
import { getCustomRepository } from "typeorm";

import { unlink } from 'fs';
import path from "path";

class MovieController {

    async getMovieByID(request: Request, response: Response) {
        const movieRepository = getCustomRepository(MovieRepository);
        const { id } = request.params;
        const movie = await movieRepository.findById(id);

        return response.json(movie);
    }

    async getAllMovies(response: Response) {
        const movieRepository = getCustomRepository(MovieRepository);
        const movie = await movieRepository.findAll();
        return response.json(movie);
    }

    async postMovie(request: Request, response: Response) {
        try {
            const movieRepository = getCustomRepository(MovieRepository);
            const movieAlreadyExists = await movieRepository.findByName(request.body.name);
            
            if (typeof movieAlreadyExists !== 'undefined') {
                response.status(409).json({
                    status: "fail",
                    data: {
                        title: "Um filme com o mesmo nome já existe no banco de dados!"
                    }
                })
            }

            let movie = new Movie();

            movie.name = request.body.name;
            movie.synopsis = request.body.synopsis;
            movie.release_date = request.body.release_date;
            movie.box_office = request.body.box_office;
            movie.poster = request.body.poster;
            movie.gender = request.body.gender;

            movie = await movieRepository.save(movie);

            return response.status(201).json({
                status: "sucess",
                data: {
                    title: "Filme cadastrado com sucesso!",
                    movie: movie
                }
            });

        } catch (error) {
            return response.status(400).json({
                status: "fail",
                data: {
                    error: error.message
                }
            })
        }

    }

    public async putMovie(request: Request, response: Response) {
        const movieRepository = getCustomRepository(MovieRepository);
        const { id } = request.params;
        let movie = await movieRepository.findById(id);

        movie.name = request.body.name;
        movie.synopsis = request.body.synopsis;
        movie.release_date = request.body.release_date;
        movie.box_office = request.body.box_office;
        movie.poster = request.body.poster;

        movieRepository.update(id, movie);

        response.status(200).json(movie);
    }

    public async deleteMovie(request: Request, response: Response) {
        const movieRepository = getCustomRepository(MovieRepository);
        const { id } = request.params;
        let movie = await movieRepository.findById(id);
        let fullpath = "./public/static/uploads/";

        unlink(path.join(fullpath, movie.poster), (err) => {
            if (err) throw err;
        });

        delete movie.full_path;

        console.log(movie);
        await movieRepository.delete(movie);
        response.status(200).json({
            status: "sucess"
        })
    }

}

export default new MovieController();