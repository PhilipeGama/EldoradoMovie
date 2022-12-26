import { faker } from '@faker-js/faker';

export const MOVIES: any[] = [];

function createRandomMovie() {
	return {
		name: faker.name.fullName(),
		synopsis: faker.name.fullName(),
		trailer: faker.name.fullName(),
		releaseDate: faker.datatype.datetime(),
		boxOffice: faker.datatype.float(),
	};
}

Array.from({ length: 5 }).forEach(() => {
	MOVIES.push(createRandomMovie());
});
