const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    const textElement = document.createElement('span');
    textElement.textContent = box.textContent;
    textElement.classList.add('typewriter-text');
    box.textContent = '';
    box.appendChild(textElement);
  });

  box.addEventListener('mouseleave', () => {
    const textElement = box.querySelector('.typewriter-text');
    if (textElement) {
      box.removeChild(textElement);
    }
  });
});
