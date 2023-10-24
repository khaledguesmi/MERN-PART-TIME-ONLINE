const {AddBook, ShowAll, ShowOne, UpdateBook, DeleteBook} = require('../controllers/book.controller');




module.exports = app => {
    app.post('/api/books',AddBook);
    app.get('/api/books',ShowAll);
    app.get('/api/books/:id',ShowOne);
    app.put('/api/books/:id',UpdateBook);
    app.delete('/api/books/:id',DeleteBook);
};