//Constructor function proxy for class - shared funcdtion
function Cell(width,height,color){
  this.width = width || 100;
  this.height = height|| 100;
  this.color = color || 'red';
}
//build function on prototype
Cell.prototype.toHtml = function(){
  //return document.createElement('div');
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;//need pixels
  //div.style.margin =`10px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.25px solid black'; //width,style,color
  //console.dir (element);
  div.style.backgroundColor = this.color;
  return div;
};


// const Cell = {
//   width: 100,
//   height: 100,
//   color: 'red'
// };

//thisis a  vactory function each cell would have own
// function createCell(width,height,color){
//   const Cell={
//     width: width,
//     height: height,
//     color: color
//   };
//   return Cell;
// }
