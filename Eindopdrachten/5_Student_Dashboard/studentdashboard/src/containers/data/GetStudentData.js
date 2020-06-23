import dashboardData from "./dashboardData"

const getStudentData = (name, value) => { 
  const studentValue = dashboardData.filter(student => {
  return student["Wie ben je?"] === name
  }).map(task => {
    return task[value]
    })
    return studentValue
}

export default getStudentData