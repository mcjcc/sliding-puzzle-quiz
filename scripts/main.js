'use strict';



// 0) initialize tiles and place into position
// 1) create 3x3 grid with nested for loop
// 2) attach event listeners
// 3) allow only tiles that are adjacent to empty node be clickable
// 4) detect empty space
// 5) when tile is clicked, move clicked tile to empty node




// padding (10) + width (68) of a tile = 2nd position
// aka positions are in multiples of 78

var tileWidth  =  68;
var tileHeight =  68;
var padding = 10;

document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  function positionTiles(tiles){
    console.log('positionTiles starting');

    for (var i=0; i < tiles.length; i++){
      console.log('for loop');
      switch(tiles[i].innerText) {
        case "1":
            break;
        case "2":
            tiles[i].style.left = tileWidth + padding + "px";
            break;
        case "3":
            tiles[i].style.left = 2 * tileWidth + padding + "px";
            break;
        case "4":
            tiles[i].style.top = tileHeight + padding + "px";
            break;
        case "5":
            tiles[i].style.left = tileWidth + padding + "px";
            tiles[i].style.top = tileHeight + padding + "px";
            break;
        case "6":
            tiles[i].style.left = 2 * tileWidth + padding + "px";
            tiles[i].style.top = tileHeight + padding + "px";
            break;
        case "7":
            tiles[i].style.top = 2 * tileHeight + padding + "px";
            break;
        case "8":
            tiles[i].style.top = 2 * tileHeight + padding + "px";
            tiles[i].style.left = tileWidth + padding + "px";
            break;
      }
    }
  }

  function mapGrid(){

  }

  function checkAdjacent(){

  }

  function moveTile(e){

  }


  function init(){
    var tiles = document.getElementsByClassName('tile');
    console.log(tiles);
    positionTiles(tiles);

    console.log('init starting');
  }
  init();

});
