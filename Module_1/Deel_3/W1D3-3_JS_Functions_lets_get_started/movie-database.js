let database = {
  title: "Puff the Magic Dragon",
  duration: 30,
  star: "Puff, Jackie, Living Sneezes"
}

const movie = (title, duration, star) => {
  return title + " lasts for " + duration + " minutes. Stars: " + star + ".";
}

console.log(movie(database.title, database.duration, database.star));