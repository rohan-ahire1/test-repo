import mysql from 'mysql2';


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3306,
    password:"Rohan@123",
    database:"test"    
});

// connection.query('SELECT * from movies', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//     console.log('Connected to Database');
// });
export default connection;