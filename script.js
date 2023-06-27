const container = document.getElementById("container");

//GRID CODE
//create a row of 16 boxes
rowLength = 16;
columnLength = 16;
for (j = 0; j < columnLength; j++) {
  for (i = 0; i < rowLength; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style = "flex-basis:" + 100 / rowLength + "%;";
    container.appendChild(grid);
    grid.addEventListener("mouseenter", colorChange);
    // grid.addEventListener("mouseleave", removeChange);
  }
}

//MIGHT NOT NEED THIS ID LOL
// //give each grid div an id
// let id = 1;
// const box = document.querySelectorAll(".grid").forEach((e) => {
//   e.id = i - 16;
//   i++;
// });

function colorChange(e) {
  e.target.classList.add("active");
}

function removeChange(e) {
  e.target.classList.remove("active");
}

//GRID SLIDER
//ADD ON INPUT TO SLIDER CHANGE
const slider = document.querySelector("#myRange");
const sliderBox = document.querySelector(".sliderValue");
slider.value = rowLength;
sliderBox.innerHTML = slider.value + " x " + slider.value;

function gridValue() {
  sliderBox.innerHTML = slider.value + " x " + slider.value;
  container.innerHTML = "";
}
function gridTransform() {
  for (j = 0; j < slider.value; j++) {
    for (i = 0; i < slider.value; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      container.appendChild(grid);
      grid.style = "flex-basis:" + 100 / slider.value + "%;";
      grid.addEventListener("mouseenter", colorChange);
      // grid.addEventListener("mouseleave", removeChange);
    }
  }
}
