import express from "express";
const router=express.Router();
import controller from './controller.js';

router.get('/books',controller.getBooks);
router.get('/books/:id',controller.getBook);
router.post('/add-books',controller.addBook);
router.put('/update-book/:id',controller.updateBook);
router.delete('/delete-book/:id',controller.deleteBook);
//router.delete('/books/:id',controller.deleteBooks);
export default router;