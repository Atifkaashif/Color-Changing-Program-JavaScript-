const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "PowderBlue",
  "Purple",
  "Orange"
];

function changeColor() {
  const box = document.getElementById("box");
  const colorText = document.getElementById("colorName");

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  box.style.backgroundColor = randomColor;
  colorText.textContent = `Current Color: ${randomColor}`;
}
