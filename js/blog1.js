const boxes = document.querySelectorAll(".box");
const contentDisplayed = document.querySelector(".content-displayed");
const content = document.querySelector(".content");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const boxContent = box.querySelector(".box-content");
        const index = boxContent.getAttribute("data-index");
        const image = boxContent.querySelector(".box-image");
        const text = boxContent.querySelector(".box-text");

        if (index === "0") {
            // Display image and text for Box 1
            content.innerHTML = "";
            content.appendChild(image.cloneNode(true));
            content.appendChild(text.cloneNode(true));
        } else {
            // Display text for other boxes
            content.innerHTML = text.innerHTML;
        }
        
        contentDisplayed.classList.add("active");
    });
});

contentDisplayed.addEventListener("click", (event) => {
    if (event.target === contentDisplayed) {
        contentDisplayed.classList.remove("active");
    }
});