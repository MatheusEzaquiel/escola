import pgPromise from "pg-promise";

require('dotenv').config()

const pgp = require("pg-promise")();
//const join = require("node:path");

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const DATABASE = process.env.DB_NAME;

const db: any = pgp(`postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`);

module.exports = db;