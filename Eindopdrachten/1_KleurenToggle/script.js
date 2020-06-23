//alle variabelen
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("nav");
const ulMenu = document.querySelector("ul");
const bodyColor = document.querySelector("body");
const orangeButton = document.querySelector("#orange");
const blueButton = document.querySelector("#blue");
const yellowButton = document.querySelector("#yellow");
const greenButton = document.querySelector("#green");

//menu openklappen
menuButton.addEventListener("mouseenter", () => {
    ulMenu.style.display = "block";    
}); 

navMenu.addEventListener("mouseleave", () => {
    ulMenu.style.display = "none";    
}); 

//achtergrond veranderen
orangeButton.addEventListener("click", () => {
    if(bodyColor.classList != "orange") {
        bodyColor.classList = "orange";
    }
});

blueButton.addEventListener("click", () => {
    if(bodyColor.classList != "blue") {
        bodyColor.classList = "blue";
    }
    
});

yellowButton.addEventListener("click", () => {
    if(bodyColor.classList != "yellow") {
        bodyColor.classList = "yellow";
    }
});

greenButton.addEventListener("click", () => {
    if(bodyColor.classList != "green") {
        bodyColor.classList = "green";
    };
});

//menu terugklappen
for(i=0; i<4; i++) {
    const liButton = document.querySelectorAll("li");
    liButton[i].addEventListener("click", () => {
        ulMenu.style.display = "none";
    });
};