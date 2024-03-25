const student = {
    fullname: "Karyna Miadouskaya", 
    studentid: "44967", 
  
    getStudentFullName: function() {
      return this.fullname;
    },
  
    getStudentId: function() {
      return this.studentid;
    }
  };
  
  console.log(`My name is ${student.fullname}. My student ID is ${student.studentid}`);