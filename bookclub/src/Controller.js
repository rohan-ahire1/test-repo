import service from './Service.js';

const controller = {

    deleteBook:async(req,res)=>{
        try{
            const id=req.params.id;
            await service.deleteBook(id);
            res.status(200).send("book deleted successfully");
        }catch(error){
            console.log(error);
            res.status(500).send("");
        }
    },

    updateBook: async(req,res)=>{
        try{
            const {title,desc,cover}=req.body;
            const id=req.params.id;
            await service.updateBooks(title,desc,cover,id);
            res.status(200).send("book updated successfully");
        }catch(error){
            console.log(error);
            res.status(500).send('an error occurred in controller');
        }
    },
    
    getBook: async function(req, res) {
        try {
            const id = req.params.id;
            const result = await service.getBook(id);
            console.log(result);
            res.send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },


















    getBooks: async function(req, res) {
        try {
            console.log('in controller');
            const result = await service.getBooks();
            console.log(result);
            res.send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    },

    addBook: async function(req,res){
        try{
            const {title,desc,cover}=req.body;
            console.log(title + desc + cover);
            await service.addBooks(title,desc,cover);
            res.send('books added successfully');
        }catch(error){
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default controller;
