import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import { createConnection } from 'typeorm';
import options from './app/database/config/ormconfig';
import Gender from './app/entity/gender.entity';
import Movie from './app/entity/movie.entity';
import router from './app/routers/router';
import { GENDERS, MOVIES } from './app/utils/seed';
dotenv.config();


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	'/static/movies',
	express.static(resolve(__dirname, '..', 'public', 'static', 'uploads'))
);

createConnection(options).then(async (db) => {
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

})
.catch(error => {
	console.log(error)
});


app.use(router);

const PORT = process.env.PORT || 6868;

app.listen(+PORT, '0.0.0.0', () => {
	console.log(`PORT ${PORT}`);
});
