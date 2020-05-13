// const wrapper = document.querySelector("#wrapper");

// console.log("wrapper next sibling is:", wrapper.nextSibling)
// console.log("wrapper next element sibling is:", wrapper.nextElementSibling)

// //const h1 = document.querySelector("h1");

// console.log("h1 previous sibling is:", h1.previousSibling);
// console.log("h1 previous element sibling is:", h1.previousElementSibling);

// h1.previousElementSibling.querySelector("p").innerHTML += "<br /> Too cool!";

let buttons = document.querySelectorAll("#button");

//how to remove list items
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e)=> {
    
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})

//how to prevent the default action to happen
const link = document.querySelector("body a");

link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("navigation to ", e.target.textContent, " was prevented!")
})