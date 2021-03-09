const path = require('path');

if (process.env.USER) require('dotenv').config();
//postgresql://postgres@localhost/postgres
const {
  DATABASE_URL = 'postgres://sdxhktfp:dT8Q2BPuGoTRqyNu9CzTZNx8wQwovkNO@ziggy.db.elephantsql.com:5432/sdxhktfp',
} = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
