const container = document.getElementById("container");
//get color input
const currentColor = document.getElementById("colorpicker");
let currentColorVal = currentColor.value;

//GRID CODE
//create a row of 16 boxes
rowLength = 16;
columnLength = 16;
for (j = 0; j < columnLength; j++) {
  for (i = 0; i < rowLength; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style =
      "flex-basis:" +
      100 / rowLength +
      //border properties (could be changed to a button)
      "%; box-sizing: border-box; border:0.1px solid rgba(0,0,0,0.08)";
    container.appendChild(grid);
    grid.addEventListener("mouseenter", colorChange);
  }
}

function colorChange(e) {
  if (randomClicked) {
    e.target.style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else if (eraseClicked) {
    e.target.style.background = "";
  } else {
    e.target.style.background = currentColor.value;
  }
}

//randomise canvas
let randomClicked = false;
function random() {
  if (!randomClicked) {
    randomClicked = true;
    eraseClicked = false;
  } else {
    randomClicked = false;
  }
  return randomClicked;
}

let eraseClicked = false;
function erase() {
  if (!eraseClicked) {
    eraseClicked = true;
    randomClicked = false;
  } else {
    eraseClicked = false;
  }
  return eraseClicked;
}

//GRID SLIDER
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
    }
  }
}

//reset canvas
function reset() {
  const coloredBox = document.querySelectorAll(".grid");
  for (i = 0; i < coloredBox.length; i++) {
    coloredBox[i].style.backgroundColor = "";
  }
}

//maybe on document load i can run grid transform so i only have to write that function once
