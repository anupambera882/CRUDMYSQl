const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsDB',
    port: 3306
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB connected successfully");
    }
});

module.exports = mysqlConnection