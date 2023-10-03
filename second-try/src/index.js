import express from 'express';
import bodyParser from 'body-parser';
import connection from './db.js';
import http from 'http';
import userController from './userController.js';
import {userRouter} from './userRouter.js';
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/movies',userRouter);
// app.get('/api/movies', (req, res) => {
//     connection.query('SELECT * FROM movies', (err, results) => {
//         if (err) {
//             res.status(500).json({ error: 'Error querying the database' });
//             return;
//         }

//         res.json(results);
//     });
// });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
