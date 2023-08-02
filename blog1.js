const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    const textElement = document.createElement('span');
    textElement.textContent = box.textContent;
    textElement.classList.add('typewriter-text');
    box.textContent = ''; // Clear the box's content
    box.appendChild(textElement); // Append the span to the box
  });

  box.addEventListener('mouseleave', () => {
    const textElement = box.querySelector('.typewriter-text');
    if (textElement) {
      box.removeChild(textElement);
      box.textContent = textElement.textContent; // Restore original text
    }
  });
});