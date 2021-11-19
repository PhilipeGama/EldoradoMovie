import { Request, Response } from "express";
import { Movie } from "src/entity/Movie";
import MovieRepository from "src/repository/MovieRepository";
import { getCustomRepository } from "typeorm";

class MovieController {

        
    async createMovie(request: Request, response: Response) {
        const movieRepository = getCustomRepository(MovieRepository);

        let movie = new Movie();

  
        movie.name = "GTA 5";
        movie.description = "Um filme de ação em mundo aberto";
        movie.releaseDate = "20-08-2013";
        console.log(movie);

        movieRepository.save(movie);
        
        

    }
}

export default new MovieController();