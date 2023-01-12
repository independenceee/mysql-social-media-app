const mysql = require("mysql");

const databaseMysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kh17112003",
  database: "social_media_app",
});

module.exports = databaseMysql;
