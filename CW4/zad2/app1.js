const express = require('express');
const studentController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', studentController.getAddNewStudentPage);
app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' });
});
app.get('/students-list', (req, res) => {
    res.render('List', { title: 'List' });
});
app.post('/add-student', (req, res) => {
   
    res.redirect('/students-list');
});


app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

