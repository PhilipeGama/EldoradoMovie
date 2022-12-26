import cors from 'cors';
import express from 'express';
import { resolve } from 'path';
import { createConnection } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();

import router from './app/routers/router';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	'/static/movies',
	express.static(resolve(__dirname, '..', 'public', 'static', 'uploads'))
);

createConnection().then(() => 'Database was connected successful!');
app.use(router);
//console.log(MOVIES);

app.listen(process.env.PORT, () => {
	console.log(`PORT ${process.env.PORT}`);
});
