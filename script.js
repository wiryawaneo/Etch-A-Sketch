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
    grid.style = "flex-basis:" + 100 / rowLength + "%; ";
    container.appendChild(grid);
    grid.addEventListener("mouseenter", colorChange);
  }
}

function colorChange(e) {
  if (buttonClicked) {
    e.target.style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  } else {
    e.target.style.background = currentColor.value;
  }
}

//randomise canvas
let buttonClicked = false;
function random() {
  if (!buttonClicked) {
    buttonClicked = true;
  } else {
    buttonClicked = false;
  }
  return buttonClicked;
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
