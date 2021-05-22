const group = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 5, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [5, 9, 8, 9]
    }
]

function getAverageStudentMark(student) {

    let sum = 0;
    student.marks.forEach((mark) => (sum += mark));

    return sum / student.marks.length;
}

function getGroupAverageMark(students) {

    let marks = [];

    students.forEach((student) => (marks = marks.concat(student.marks)));

    let sum = 0;

    marks.forEach((mark) => (sum += mark));


    console.log(sum / marks.length);
}
