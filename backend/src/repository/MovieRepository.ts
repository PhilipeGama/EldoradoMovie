import { Movie } from "src/entity/Movie";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie> {
    
}