//Toevoegen big five
const listSeenAnimals = document.querySelector("#spotted-animals-list");
const animalButton = document.querySelectorAll(".big-five-button");
const animals = ["Lion", "Leopard", "Elephant", "Rhino", "Buffalo"]

animalButton.forEach((button, index) => {
    const nameAnimal = animals[index];
    const addAnimals = () => {
        const addLi = document.createElement("li");
        document.getElementById("spotted-animals-list").appendChild(addLi);
        const animal = document.createTextNode(nameAnimal);
        addLi.appendChild(animal);
        addLi.classList.add("spotted-animals-list-item")};
  button.addEventListener("click", addAnimals);
});

//Remove the first
const removeFirst = document.querySelector("#remove-first-item-button");
const removeFirstAnimal = () => {
    const removedAnimal = document.querySelector(".spotted-animals-list-item");
    // console.log(removedAnimal);
    listSeenAnimals.removeChild(removedAnimal);
}
removeFirst.addEventListener("click", removeFirstAnimal)

//Remove all
const removeAll = document.querySelector("#remove-all-button");
const removeAllAnimals = () => {
    document.querySelectorAll(".spotted-animals-list-item").forEach(animal => animal.remove());
}
removeAll.addEventListener("click", removeAllAnimals);