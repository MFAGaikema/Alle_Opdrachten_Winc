const booklist = document.querySelector("#ul-books")

//Siblings
console.log("this is the next sibling:",booklist.nextSibling); //niet gebruiken, anders selecteer je de linebreak
console.log("this is the next element Sibling:", booklist.nextElementSibling);
console.log("this is the previous sibling:",booklist.previousSibling); //niet gebruiken, anders selecteer je de linebreak
console.log("this is the previous element sibling:", booklist.previousElementSibling);

//Parents
console.log("the parent node is", booklist.parentNode);
console.log("the parent element is", booklist.parentElement);

//Children
console.log("the child nodes are", booklist.childNodes); //beter deze niet gebruiken, want je wil de linebreakes(text) niet
console.log("the children are", booklist.children);

const title = document.querySelector(".title");

title.nextElementSibling.querySelector("li").innerHTML += "<br /> Stukje onder de titel" 

//Elementen toevoegen
const newLi = document.createElement("li");
const newA = document.createElement("a")

const menu = document.querySelector("ul");

menu.appendChild(newLi);

newLi.classList.add("newclass");

newLi.appendChild(newA);

newA.innerHTML = "blog";

menu.insertBefore(newLi, menu.querySelector("li"))

//Elementen verwijderen
const parent = document.querySelector("#booklist").getElementsByTagName("ul")[0]

const child = parent.querySelector(".newclass");
console.log(child)

parent.removeChild(child);