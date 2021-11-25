import express from 'express';
import { createConnection } from 'typeorm';
import { resolve } from 'path';

import router from './config/router';

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());


// app.use('/static/news', 
//     express.static(resolve(__dirname, '..', 'public', 'static', 'uploads'))
// );


createConnection().then(() => "Database was connected successful!");
app.use(router);

app.listen(4001);

console.log("PORT 4001")