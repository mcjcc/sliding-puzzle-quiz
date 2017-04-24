'use strict';

// 0) initialize tiles and place into position
// 1) create 3x3 grid with nested for loop
// 2) attach event listeners
// 3) allow only tiles that are adjacent to empty node be clickable
// 4) detect empty space
// 5) when tile is clicked, move clicked tile to empty node

// padding (10) + width (68) of a tile = 2nd position
// aka positions are in multiples of 68px and then add 10px of padding

var tileWidth  =  68; // tiles are 68px x 68px
var tileHeight =  68; // tiles are 68px x 68px
var padding = 10; // padding is 10px from tile to edge of the board

var board = {};
board = {
  1:{x: 40 , y: 40},
  2:{x: 108, y: 40},
  3:{x: 176, y: 40},
  4:{x: 40 , y: 108},
  5:{x: 108, y: 108},
  6:{x: 176, y: 108},
  7:{x: 40 , y: 176},
  8:{x: 108, y: 176},
  9:{x: 176, y: 176}
}

document.addEventListener("DOMContentLoaded", function(event) {

  function positionTiles(tiles){
    console.log('repositioning tiles!');

    for (var i=0; i < tiles.length; i++){
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

  function checkAdjacent(target){
    console.log('checking adjacent tiles!');
    // store target element's getBoundingClientRect()
    // find every other element's getBoundingClientRect()
    // based on that, you can deduce if clicked element is next to open space

    var targetCoordinates = target.getBoundingClientRect();

    var targetX = targetCoordinates.left + window.scrollX;
    var targetY = targetCoordinates.top + window.scrollY;

    // var targetElement = {};
    // targetElement[target.innerText] = {x: targetX, y: targetY};
    console.log("clicked tile coordinates: " + targetX + ", " + targetY);


    // first row checks
    if (targetX === 40 && targetY === 40) {
      if(document.elementFromPoint(40,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,40).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 108 && targetY === 40) {
      if(document.elementFromPoint(40,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 176 && targetY === 40) {
      if(document.elementFromPoint(108,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,108).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    // second row checks
    if (targetX === 40 && targetY === 108) {
      if(document.elementFromPoint(40,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(40,176).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 108 && targetY === 108) {
      if(document.elementFromPoint(108,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(40,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,176).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 176 && targetY === 108) {
      if(document.elementFromPoint(176,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,176).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    // third row
    if (targetX === 40 && targetY === 176) {
      if(document.elementFromPoint(40,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,176).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 108 && targetY === 176) {
      if(document.elementFromPoint(40,176).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,176).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    if (targetX === 176 && targetY === 176) {
      if(document.elementFromPoint(108,176).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,108).getAttribute('class') === 'tile'){
        console.log("can't move");
      }
    }

    // -----might not need this
    // var getOtherTileCoordinates = {};
    //
    //
    // for (var i=0; i < tiles.length; i++){
    //   getOtherTileCoordinates[tiles[i].innerText] = {
    //                                   x: tiles[i].getBoundingClientRect().left + window.scrollX,
    //                                   y: tiles[i].getBoundingClientRect().top + window.scrollY
    //                                  };
    //
    // }
    // console.log(getOtherTileCoordinates);
    // -----might not need this
  }

  function moveTile(e){
    //check if adjacent is empty
    console.log('a tile was clicked! move tile! but first check adjacent space!');
    console.log(e.target);
    var clickedTile = e.target;
    checkAdjacent(clickedTile);
  }

var tiles = document.getElementsByClassName('tile');
  function init(){
    console.log('init starting');
    // var tiles = document.getElementsByClassName('tile');

    // tiles start all on position 1 and need to be moved to the proper places
    positionTiles(tiles);

    // add click event listener to each tile
    for (var i=0; i < tiles.length; i++){
      tiles[i].addEventListener('click', moveTile);
    }

  }
  init();

});
