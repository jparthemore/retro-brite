/*jshint esversion: 6*/
const App = {
  rootElement: '#app',
  selectedColor: 'white',
  numRows: 10,
  numCols: 10,
  cellWidth: 25,
  cellHeight: 25,
  grid: [],
  start: function(){
    this.cacheDOM();//dom caaches any static things need to keep track of
    this.makeGrid();
    this.bindEvents();
    this.render();
  },
  makeGrid: function(){
    this.grid = new Array(this.numRows);

    for(let rowIndex = 0; rowIndex< this.numRows; rowIndex++){
      this.grid[rowIndex]= new Array(this.numCols);
      for (let colIndex=0; colIndex < this.numCols; colIndex++){
        this.grid[rowIndex][colIndex] = new Cell(this.cellWidth, this.cellHeight, this.selectedColor);
      }
    }

  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
  },

  bindEvents: function(){},
  render: function(){
    this.grid.forEach(row=>{
      const rowContainer = document.createElement('div');
      rowContainer.style.height = `${this.cellHeight}px`;
      row.forEach(cell=>{
        const element = cell.toHtml();
        rowContainer.appendChild(element);
      });
      this.root.appendChild(rowContainer);
    });
  }

};

App.start();
