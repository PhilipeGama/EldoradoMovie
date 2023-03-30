import { EntityRepository, Repository } from 'typeorm';
import Movie from '../entity/movie.entity';

@EntityRepository(Movie)
export default class MovieRepository extends Repository<Movie> {
	findByName(name: string) {
		return this.findOne({ name }, { relations: ['gender'] });
	}

	findById(id) {
		return this.findOne({ id }, { relations: ['gender'] });
	}

	async findMoviesPaginated(page: number, limit: number) {
		const skip = page * limit || 0;
		const take = limit || 10;

		const items =  await this.find({
			relations: ['gender'],
			skip,
			take
		});
		
		return items;
	}

	async countMovies() {
		return this.count({
			relations: ['gender'],
		})
	}
}
