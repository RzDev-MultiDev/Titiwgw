const typer = document.querySelector('.typer');
const texts = ["Welcome to the Future.", "Simplicity is Luxury.", "Discover Elegance."];
let index = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[index].length) {
    typer.textContent += texts[index][charIndex];
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typer.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);