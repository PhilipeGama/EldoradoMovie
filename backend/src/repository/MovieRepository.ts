import Movie from "src/entity/Movie";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie> {

    public findByName(name: string){
        return this.findOne({name})
    }

    public findById(id: number){
        return this.findOne({id})
    }
    
}