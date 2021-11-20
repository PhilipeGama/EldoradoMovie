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
      __dirname + "/**/app/entity/*.ts"
      // __dirname + "/**/app/entity/*.ts"
    ],
    "migrations": [
       __dirname + "/**/app/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "/**/app/database/migrations",
        "entitiesDir": "/**/app/entity"
    }
 }