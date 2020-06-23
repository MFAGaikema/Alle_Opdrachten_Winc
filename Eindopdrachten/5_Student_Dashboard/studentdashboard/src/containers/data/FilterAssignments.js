import dashboardData from "./dashboardData"

const assignments = dashboardData.map(task => {
  return task["Welke opdracht of welk project lever je nu in?"]
})
const filterAssignments = Array.from(new Set(assignments))

export default filterAssignments