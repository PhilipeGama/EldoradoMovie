import cors from 'cors';
import express from 'express';
import { resolve } from 'path';
import { createConnection } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

import { GENDERS, MOVIES } from './app/database/config/seed';
import Gender from './app/entity/gender.entity';
import Movie from './app/entity/movie.entity';
import router from './app/routers/router';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	'/static/movies',
	express.static(resolve(__dirname, '..', 'public', 'static', 'uploads'))
);


createConnection().then(async (db) => {
	const genderExists = (
		await db.manager.query(
				`SELECT *from gender`,
			)
	)

	const movieExists = (
		await db.manager.query(
				`SELECT *from movie`,
			)
	)
	
	if(genderExists.length === 0) {
		db.createQueryBuilder()
		.insert()
		.into(Gender)
		.values(GENDERS)
		.execute()
	}

	if(movieExists.length === 0) {
		db.createQueryBuilder()
		.insert()
		.into(Movie)
		.values(MOVIES)
		.execute()
	}

});

app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`PORT ${process.env.PORT}`);
});
