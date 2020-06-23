import dashboardData from "./dashboardData"

const studentAssignments = (task, type) => {
  const assignmentData = dashboardData.filter(item => {
  return item["Welke opdracht of welk project lever je nu in?"] === task
}).map(item => {
  return item[type]
})
  return assignmentData
}

export default studentAssignments