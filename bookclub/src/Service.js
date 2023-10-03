import connection from './db.js';

const service = {
    deleteBook: async (id)=>{
        return new Promise((resolve,reject)=>{
            connection.query('delete from books where id=?',id,(err,result)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve("successfully delete book")
                }
            })
        })
    },


    updateBooks: async (title, desc, cover, id) => {
        return new Promise((resolve, reject) => {
            const values = [title, desc, cover, id];
            connection.query('UPDATE books SET title=?, `desc`=?, cover=? WHERE id=?', values, (err, result) => {
                if (err) {
                    console.log(err);
                    reject("An error occurred");
                } else {
                    resolve("Book details updated successfully");
                }
            });
        });
    },
    getBook: async function(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM books WHERE id=?', id, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    },

















    getBooks: async function() {
        return new Promise((resolve, reject) => {
            console.log('in service');
            connection.query('SELECT * FROM books', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(results);
                    resolve(results);
                }
            });
        });
    },
    

    addBooks: async function(title,desc,cover) {
        return new Promise((resolve, reject) => {
            const values = [title, desc, cover];
            connection.query('INSERT INTO books (title, `desc`, cover) VALUES (?, ?, ?)', values, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    }
}

export default service;
