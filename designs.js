// Select color input
const color = document.getElementById('colorPicker');

// Select size input
const size = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWeight');

// Select grid table
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  table.innerHTML = "";
  // Add rows
  for (let row = 0; row < gridHeight.value; row++) {
    const gridTr = document.createElement('tr');
    table.appendChild(gridTr);
    //Add columns
    for (let col = 0; col < gridWidth.value; col++) {
      const gridTd = document.createElement('td');
      gridTr.appendChild(gridTd);
    }
  }
  // Log grid dimensions to console
  console.log('Grid Dimensions:\n- Grid height = ' + gridHeight.value + '\n- Grid width = ' + gridWidth.value);
};

// On form submission
size.addEventListener('submit', function(event) {
  // Prevent default action
  event.preventDefault();
  // Call makeGrid function
  makeGrid();
})