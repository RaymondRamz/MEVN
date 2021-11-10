const fs = require('fs')
const { join } = require('path')


const studentsCtrl = {}

studentsCtrl.writeStudent = (pathFile, student, res) => {
    let students = []
    if (fs.existsSync(pathFile)) {
        students = require(pathFile)
        students.push(student)
    }
    else{
        students = []
        students.push(student)
    }
    fs.writeFile(pathFile, JSON.stringify(students), (err) => {
        if (err) throw err
        console.log('Estudiante agregado');
        res.status(201).json(students)
    })
}

studentsCtrl.readStudent = (pathFile, id) => {
    const students = JSON.parse(fs.readFileSync(pathFile))
    return students[id]
}

module.exports = studentsCtrl