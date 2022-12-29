import { faker } from '@faker-js/faker';

export const GENDERS: any[] = [];
export const MOVIES: any[] = [];

function createRandomGender() {
	return {
		name: faker.word.verb(),
	}
}

function createRandomMovie() {
	return {
		name: faker.name.fullName(),
		synopsis: faker.lorem.paragraph(),
		trailer: faker.internet.url(),
		releaseDate: faker.datatype.datetime(),
		boxOffice: faker.datatype.float(),
		poster: '1672342250811-blitz.jpg',
		gender: faker.datatype.number({min: 1, max: 5})
	};
}

Array.from({length: 5}).forEach(() => {
	GENDERS.push(createRandomGender())
})

Array.from({ length: 5 }).forEach(() => {
	MOVIES.push(createRandomMovie());
});
