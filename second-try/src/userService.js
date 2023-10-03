import connection from './db.js';

const userService = {
     getUsers: async()=> {
         console.log('Inside getUsers');
        // const result= await connection.query('SELECT * FROM movies');
        // console.log(result[0]);
        // return result[0];
           await connection.query('SELECT * FROM movies', (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Error querying the database' });
                return;
            }
            console.log(results[0]);
            return results[0];
        });
    }

};

export default userService;