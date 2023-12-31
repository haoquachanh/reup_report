require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "B.Br$paFZgZh52s",
    "database": process.env.DB_DATABASE_NAME || "postgres",
    "host": process.env.DB_HOST || "db.vcwteaontkqykwsktuzy.supabase.co",
    "port": process.env.DB_PORT || 5432,
    "dialect": process.env.DB_DIALECT || 'postgres',
    "define": {
      "freezeTableName": true
    },
    dialectOptions:
      process.env.DB_SSL === 'true' ?
        {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        } : {}
    ,
    "timezone": "+07:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};