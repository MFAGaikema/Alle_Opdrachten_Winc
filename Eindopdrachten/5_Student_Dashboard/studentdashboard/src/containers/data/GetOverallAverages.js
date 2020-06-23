import dashboardData from "./dashboardData"

//Functie voor het gemiddelde van alle opdrachten
const getAverage = (tasks, gradeType) => {
  const rightAssignment = dashboardData.filter(assignment => {
    return assignment["Welke opdracht of welk project lever je nu in?"] === tasks
  }).map(grade => {
      return parseInt(grade[gradeType])
  })
  const totalGrades = rightAssignment.reduce((a,b) => {
    return a + b
  })
  return totalGrades/rightAssignment.length
}

const getOverallAverages = (grade) => {
const assignments = dashboardData.map(task => {
  return task["Welke opdracht of welk project lever je nu in?"]
})
const filterAssignments = Array.from(new Set(assignments))
const arrayForAverages = filterAssignments.map(task => {
  return getAverage(task, grade)
})
return arrayForAverages
}

export default getOverallAverages
