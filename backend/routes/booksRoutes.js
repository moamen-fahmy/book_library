const express = require('express');
const mongoose = require('mongoose');
const Book = require('../schema/bookSchema');
const { createBookSchema, updateBookSchema } = require('../validation/bookValidation');
const router = express.Router();


router.get('/books', async (req, res) => {
    try{
        const books = await Book.find();
        if(!books){
            return res.status(404).send("No books found");
        }
        res.send(books);
    }catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try{
        const book = await Book.findById(bookId);
        if(!book){
            return res.status(404).send("Book not found");
        }
        res.send(book);
    }catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

router.post('/books', async (req, res) => {
    const { error, value } = createBookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).send(`Validation Error: ${error.message}`);
    }
    try {
        const book = await Book.create(value);
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

router.put('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    
    const { error, value } = updateBookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).send(`Validation Error: ${error.message}`);
    }
    try{
        const book = await Book.findByIdAndUpdate(bookId, value);
        if(!book){
            return res.status(404).send("Book not found");
        }
        res.send(book);
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

router.delete('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try{
        const book = await Book.findByIdAndDelete(bookId);
        if(!book){
            return res.status(404).send("Book not found");
        }
        res.send(`${book.title} Book deleted successfully`);
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

module.exports = router;