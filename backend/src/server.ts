import express from 'express';
import { createConnection } from 'typeorm';
import router from './config/router';
import MovieController from './controller/MovieController';



const app = express();
app.use(express.json());
createConnection().then(() => "Database was connected successful!");
app.use(router);

app.listen(4001);

console.log("PORT 4001")