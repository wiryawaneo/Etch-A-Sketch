const container = document.getElementById("container");

//create a row of 16 boxes
rowLength = 16;
columnLength = 16;
for (j = 0; j < columnLength; j++) {
  for (i = 0; i < rowLength; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    grid.addEventListener("mouseenter", colorChange);
    // grid.addEventListener("mouseleave", removeChange);
  }
}

//give each grid div an id
let id = 1;
const box = document.querySelectorAll(".grid").forEach((e) => {
  e.id = i - 16;
  i++;
});

function colorChange(e) {
  e.target.classList.add("active");
}

function removeChange(e) {
  e.target.classList.remove("active");
}
