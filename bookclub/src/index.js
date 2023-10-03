import express from "express";
import mysql from "mysql2";
import cors from "cors";
import router from "./Routes.js";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/',router);



// app.get('/books', (req, res) => {
//     db.query('SELECT * FROM books',(err,results)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('in get, get is ggetting calles here');
//             console.log(results);
//             res.status(500).send(results); 
            
//         }
//     });
// });

app.get('/books/:id', (req, res) => {
    const id=req.params.id;
    db.query('SELECT * FROM BOOKS WHERE id=?',id,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        res.send(result);
    })
});
// app.get('/', (req, res) => {
//    db.query('select * from books',(err,results)=>{
//     if(err){
//         console.log(err);
//     }
//     res.send(results);
//    });    
// });

app.post('/addBooks', (req, res) => {
    const q='insert into books(`title`,`desc`,`cover`) values(?)';
    const book=[req.body.title,req.body.desc,req.body.cover];
    db.query(q,[book],(err,results)=>{
        if(err){
            console.log(err);
        }else{
            res.status(201).send("books added successfully");
            // setTimeout(() => {
            //    res.redirect('/books'); 
            // }, 2000);
        }
    });
});





app.listen(8000, () => {
    console.log('everything is working fine i guess,gg');
});  