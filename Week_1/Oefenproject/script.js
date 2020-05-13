//uit-/terugklappen menu
const hoverMenu = document.querySelector(".menu-closed");
const navMenu = document.querySelector("#navmenu");
const menuButton = document.querySelector("#menu");
const liAll = document.querySelectorAll("li");

const showMenu = () => {hoverMenu.classList = "menu-open"};
const hideMenuDelay = () => {setTimeout(() => {hoverMenu.classList = "menu-closed";},200)}

menuButton.addEventListener("click", showMenu)
menuButton.addEventListener("mouseover", showMenu);
navMenu.addEventListener("mouseleave", hideMenuDelay);

//terugklappen na kleur selecteren
const liBtn = document.querySelectorAll("li");

liBtn.forEach(liAll => {
    const rollOut = () => {liAll.style.width = "140px"};
    const rollBack = () => {liAll.style.width = "100px"};
    liAll.addEventListener("click", hideMenuDelay);
    liAll.addEventListener("click", rollBack)
    liAll.addEventListener("mouseover", rollOut);
    liAll.addEventListener("mouseleave", rollBack);
});

//responsive maken

//achtergrond veranderen met muis
const redButton = document.querySelector("#red");
const orangeButton = document.querySelector("#orange");
const blackButton = document.querySelector("#black");
const body = document.body;
const main = document.querySelector("main");

redButton.addEventListener("click", () => {
    body.style.backgroundColor = "red";
    main.innerHTML = "red";
})

orangeButton.addEventListener("click", () => {
    body.style.backgroundColor = "orange";
    main.innerHTML = "orange";
})

blackButton.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    main.innerHTML = "black";
})

//achtergrond veranderen met toetsen
const keyPress = (event) => {
    if (event.keyCode === 49) {
        body.style.backgroundColor = "red";
        main.innerHTML = "red";
        hoverMenu.classList = "menu-closed";

    }   else if (event.keyCode === 50) {
        body.style.backgroundColor = "orange";
        main.innerHTML = "orange";
        hoverMenu.classList = "menu-closed";

    }   else if (event.keyCode === 51) {
        body.style.backgroundColor = "black";
        main.innerHTML = "black";
        hoverMenu.classList = "menu-closed";
    }
}
body.addEventListener("keypress", keyPress);