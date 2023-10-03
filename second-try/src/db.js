import mysql from 'mysql2/promise';


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rohan@123',
    database: 'movie_ticket_booking',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});



// connection.query('SELECT * from movies', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//     console.log('Connected to Database');
// });
export default connection;