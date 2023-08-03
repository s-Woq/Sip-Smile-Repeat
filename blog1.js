const boxes = document.querySelectorAll(".box");
const contentDisplayed = document.querySelector(".content-displayed");
const content = document.querySelector(".content");

const boxContents = [
    "Aprender algo nuevo puede ser complicado debido a la carga cognitiva que impone en nuestro cerebro. Un error común es intentar memorizar sin comprender, lo que resulta en un aprendizaje superficial que dificulta la retención y aplicación.b  ",
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

