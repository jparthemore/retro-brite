/*jshint esversion: 6*/
const App = {
  rootElement: '#app',
  selectedColor: 'white',
  numRows: 4,
  numCols: 4,
  cellWidth: 100,
  cellHeight: 100,
  grid: [],
  start: function(){
    this.cacheDOM();//dom caaches any static things need to keep track of
    this.makeGrid();
    this.bindEvents();
    this.render();
  },
  makeGrid: function(){
    this.grid = new Array(this.numRows);
    for(let i = 0; i<this.grid.length; i++){
      this.grid[i]= new Array(this.numCols);
    }
    for(let i = 0; i< this.grid.length; i++){
      for (let j=0; j < this.grid[i].length; j++){
        //tempGrid[i][j] = i + j;
        this.grid[i][j] = new Cell(this.cellWidth, this.cellHeight, this.selectedColor);
      }
    }
    console.log(this.grid);

  },
  cacheDOM: function(){},

  bindEvents: function(){},
  render: function(){}

};

App.start();
