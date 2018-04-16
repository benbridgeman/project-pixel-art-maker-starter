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
  console.log('Grid Dimensions:\n- Grid height = ' + gridHeight.value + '\n- Grid width = ' + gridWidth.value);
};