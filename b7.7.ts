const students: any[] = [
    { id: 1, name: "he he he he he", class: "S" },
    { id: 2, name: "hehehe", class: "S" },
    { id: 3, name: "he he he he he", class: "C" },
    { id: 4, name: "he he he he, class: C" },
  ];
  function getStudentsByClass(students: any[], className: string): any[] {
    const filteredStudents: any[] = [];
    for (const student of students) {
      if (student.class === className) {
        filteredStudents.push(student);
      }
    }
    return filteredStudents;
  }

  const studentsInA1: any[] = getStudentsByClass(students, "S");
  console.log(studentsInA1);
