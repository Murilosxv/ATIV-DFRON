 const express = require('express');
 const Book = require('../models/Book');
 const router = express.Router ();

 router.post('/', async (req, res) => {
    const {title, author, year} = req.body;
    try {
        const newBook = new Book ({ title, author, year});
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error});   
    }
 });






 router.get ('/', async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error){
        res.status(500).json ({ message: 'Erro ao buscar o livro', error });
    }
 });



 router.put ('/:id', async (req, res) => {
    const { title, author, year} = req.body;
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {title, author, year}, { new: true});
        res.status(200).json(updatedBook);
    } catch (error){
        res.status(500).json({ message: 'Erro ao atualizar livro', error});
    }
});




// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id); // Deletamos o livro pelo ID
        res.status(200).json({message: 'Livro deletado com sucesso' }); // Retornamos mensagem de sucesso
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar livro', error }); // Retornamos erro, se houver
    }
});
module.exports = router;