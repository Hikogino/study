const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');


const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: 'supersecretkey', 
    resave: false,
    saveUninitialized: false
}));


app.use('/user', userRouter);
app.use('/books', bookRouter);


app.get('/', (req, res) => {
    res.redirect('/books'); 
});


app.use((req, res, next) => {
    res.status(404).render('not-found', {
        title: '404: Page Not Found'
    });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



