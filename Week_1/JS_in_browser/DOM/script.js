const button = document.getElementById("first-button");

button.addEventListener("click", () => {
    alert("Button clicked!")
})

const body = document.querySelector(".blue-background");

//nieuwe class toevoegen
body.addEventListener("click", () => {
    body.classList.add("red-background");
} )

//nieuwe class toevoegen en togglen
body.addEventListener("click", () => {
    body.classList.toggle("red-background");
} )

//bestaande class vervangen en omwisselen
body.addEventListener("click", () => {

    
        if(body.className === "blue-background") {
        body.className = "red-background"; 
    } else {body.className = "blue-background";
    }
})