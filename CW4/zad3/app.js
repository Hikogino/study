const studentController = require('./controllers/students');

app.post('/add-student', studentController.addNewStudent);


app.get('/success', studentController.getAddingNewStudentSuccessPage);

app.get('/students-list', studentController.getStudentsListPage);


