import Movie from "../entity/movie.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie> {

    public findByName(name: string){
        return this.findOne({name}, {relations: ['gender']})
    }

    public findById(id){
        return this.findOne({id}, {relations: ['gender']})
    }

    public findAll(){
        return this.find({
            relations: ['gender']
        })
    }
    
}