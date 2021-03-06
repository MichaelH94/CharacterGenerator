const path = require('path');
require('dotenv').config()

exports.dbConfig = {
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD,
    db: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST
}
