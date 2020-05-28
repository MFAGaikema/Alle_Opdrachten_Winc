//Master function API
const allTasks = async (result, method) => {
  try {
    const res = await fetch(result, method);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const apiUrl = "https://wincacademydatabase.firebaseio.com/Marijn/Tasks.json";

const postTasks = () => {
  allTasks(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description: input.value, done: false }),
  });
};
