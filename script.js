const container = document.getElementById("container");

//create a row of 16 boxes
rowLength = 16;
columnLength = 16;
for (j = 0; j < columnLength; j++) {
  for (i = 0; i < rowLength; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    grid.addEventListener("mouseover", colorChange);
  }
}

//give each grid div an id
let id = 1;
const box = document.querySelectorAll(".grid").forEach((e) => {
  //   console.log(e);
  e.id = i - 16;
  i++;
});

function colorChange(e) {
  //give each grid div an id
  //   const box = document.querySelector(".grid");
  console.log(e.target);
}
