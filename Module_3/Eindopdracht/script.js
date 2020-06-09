const addBtn = document.querySelector("button");
const input = document.querySelector("#description");

//Nieuwe posts toevoegen

addBtn.addEventListener("click", postTasks);

//Input POST omzetten naar JSON
const callData = async () => {
  const data = await allTasks(apiUrl, { method: "GET" });

  console.log("Before (the raw result):", data);
  let tasks = Object.keys(data).map((key) => ({
    id: key,
    description: data[key].description,
    done: data[key].done,
  }));
  console.log("After the tasks array", tasks);

  //Lijstitems toevoegen
  tasks.forEach((task) => {
    const parentOfLi = document.querySelector("ul");
    const li = document.createElement("li");
    parentOfLi.appendChild(li);
    const p = document.createElement("p");
    li.appendChild(p);
    p.innerText = task.description;

    //id voor APIurl
    const id = task.id;

    //Taak aanpassen
    p.addEventListener("click", () => {
      if (task.done == false) {
        const textArea = document.createElement("input");
        textArea.setAttribute("type", "text");
        textArea.setAttribute("value", task.description);
        textArea.classList.add("edittask");
        textArea.setAttribute("placeholder", task.description);
        li.replaceChild(textArea, p);
        textArea.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            console.log(textArea.value);
            const put = `https://wincacademydatabase.firebaseio.com/Marijn/Tasks/${id}.json`;
            allTasks(put, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                description: textArea.value,
                done: false,
              }),
            });
            li.replaceChild(p, textArea);
          }
        });
      }
    });
    const checkBtn = document.createElement("img");
    li.appendChild(checkBtn);
    checkBtn.classList.add("checkbtn");
    checkBtn.src = "check-icon.png";

    //Status done => true
    checkBtn.addEventListener("click", () => {
      checkBtn.style.filter = "none";
      li.style.textDecoration = "line-through";
      const put = `https://wincacademydatabase.firebaseio.com/Marijn/Tasks/${id}.json`;
      allTasks(put, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: task.description, done: true }),
      });
    });
    // if (task.done == true) {
    //   ;
    // }

    //Taken verwijderen
    const trash = document.createElement("img");
    li.appendChild(trash);
    trash.classList.add("trashbtn");
    trash.src = "trash-delete-icon.jpg";
    trash.addEventListener("click", () => {
      const del = `https://wincacademydatabase.firebaseio.com/Marijn/Tasks/${id}.json`;
      allTasks(del, {
        method: "DELETE",
      });
    });
  });
};
callData();
