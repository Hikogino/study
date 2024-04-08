let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.addNewStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    students.push({ id: nextId, fullName, code, fieldOfStudies });
    nextId++;
    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', {
        title: 'Success',
        message: 'Student has been added with success!'
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { title: 'Students List', students });
};
