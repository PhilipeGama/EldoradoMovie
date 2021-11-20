require('dotenv').config();
const { resolve } = require('path')

module.exports = {

    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "logging": false,
    "entities": [
      __dirname + "./src/app/entity/*.ts",
      // __dirname + "/dist/app/entity/*.ts"
    ],
    "migrations": [
       __dirname + "./src/app/database/migrations/*.ts",
      //  __dirname + "/dist/app/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": __dirname + "./src/app/database/migrations",
        "entitiesDir": __dirname + "./src/app/entity"
    }
 }