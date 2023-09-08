const boxes = document.querySelectorAll(".box");
const contentDisplayed = document.querySelector(".content-displayed");
const content = document.querySelector(".content");

const boxContents = [
    // Use image URLs directly (preloading them)
    "./img/night.jpg",
    "This is the content for Box 2...",
    "This is the content for Box 3...",
];

// Preload images
const preloadedImages = [];
for (let i = 0; i < boxContents.length; i++) {
    const image = new Image();
    image.src = boxContents[i];
    preloadedImages.push(image);
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        // Check if it's an image or other content
        if (index === 0) {
            content.innerHTML = `<div class='blog'><img id='first-image' loading='lazy' src='${boxContents[index]}' alt='banner1'></div>`;
        } else {
            content.innerHTML = boxContents[index];
        }
        contentDisplayed.classList.add("active");
    });
});

contentDisplayed.addEventListener("click", (event) => {
    if (event.target === contentDisplayed) {
        contentDisplayed.classList.remove("active");
    }
});
