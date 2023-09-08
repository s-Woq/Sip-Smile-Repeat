const boxes = document.querySelectorAll(".box");
const contentDisplayed = document.querySelector(".content-displayed");
const content = document.querySelector(".content");

const boxContents = [
    "<div class='blog'><img id='first-image' src='./img/forest2.jpg' alt='banner1'> </div> <div class='blog'> </div> <div class='blog'></div>",
    "This is the content for Box 2...",
    "This is the content for Box 3..."
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        content.innerHTML = boxContents[index];
        contentDisplayed.classList.add("active");
    });
});

contentDisplayed.addEventListener("click", (event) => {
    if (event.target === contentDisplayed) {
        contentDisplayed.classList.remove("active");
    }
});

