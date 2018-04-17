// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const size = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWeight');

// Select grid table
const table = document.getElementById('pixelCanvas');

// Mouse event status
let mouseDrag = false
document.addEventListener('mousedown', function () {
  mouseDrag = true;
});
document.addEventListener('mouseup', function () {
  mouseDrag = false;
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Reset table content
  table.innerHTML = "";
  // Add rows
  for (let row = 0; row < gridHeight.value; row ++) {
    const gridTr = document.createElement('tr');
    table.appendChild(gridTr);
    //Add columns
    for (let col = 0; col < gridWidth.value; col ++) {
      const gridTd = document.createElement('td');
      gridTr.appendChild(gridTd);
    }
  }
  // Log grid dimensions to console
  console.log('Grid Dimensions:\n- Grid height = ' + gridHeight.value + '\n- Grid width = ' + gridWidth.value);
  // Add click event to all td tags in the canvas
  table.addEventListener('mousedown', function (event) {
    if (event.target.nodeName === 'TD') {
      event.target.style.backgroundColor = color.value;
    }
  });
  // Add drag functionality to canvas
  table.addEventListener('mousemove', function (event) {
    if (event.target.nodeName === 'TD' && mouseDrag === true) {
      event.target.style.backgroundColor = color.value;
    }
  });
}

// On form submission
size.addEventListener('submit', function(event) {
  // Prevent default action
  event.preventDefault();
  // Call makeGrid function
  makeGrid();
});