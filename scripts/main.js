'use strict';

// 0) initialize tiles and place into position
// 1) create 3x3 grid with nested for loop
// 2) attach event listeners
// 3) allow only tiles that are adjacent to empty node be clickable
// 4) detect empty space
// 5) when tile is clicked, move clicked tile to empty node

// padding (10) + width (68) of a tile = 2nd position
// aka positions are in multiples of 68px and then add 10px of padding



var tileSide  =  68; // tiles are 68px x 68px
var padding = 10; // padding is 10px from tile to edge of the board

document.addEventListener("DOMContentLoaded", function(event) {

  function positionTiles(tiles){
    console.log('repositioning tiles!');

    for (var i=0; i < tiles.length; i++){
      switch(tiles[i].innerText) {
        case "1":
            tiles[i].style.left = "0" + padding + "px";
            tiles[i].style.top =  "0" + padding + "px";
            break;
        case "2":
            tiles[i].style.left = tileSide + padding + "px";
            tiles[i].style.top =  "0" + padding + "px";
            break;
        case "3":
            tiles[i].style.left = 2 * tileSide + padding + "px";
            tiles[i].style.top =  "0" + padding + "px";
            break;
        case "4":
            tiles[i].style.left = "0" + padding + "px";
            tiles[i].style.top = tileSide + padding + "px";
            break;
        case "5":
            tiles[i].style.left = tileSide + padding + "px";
            tiles[i].style.top = tileSide + padding + "px";
            break;
        case "6":
            tiles[i].style.left = 2 * tileSide + padding + "px";
            tiles[i].style.top = tileSide + padding + "px";
            break;
        case "7":
            tiles[i].style.left = "0" + padding + "px";
            tiles[i].style.top = 2 * tileSide + padding + "px";
            break;
        case "8":
            tiles[i].style.top = 2 * tileSide + padding + "px";
            tiles[i].style.left = tileSide + padding + "px";
            break;
      }
    }
  }


  function checkAdjacent(target){
    console.log('checking adjacent tiles!');
    // store target element's getBoundingClientRect()

    // based on that, you can find out if clicked element is next to open space


    // tile coordinates:

    // 40, 40  | 108,  40 | 176,  40
    // 40, 108 | 108, 108 | 176, 108
    // 40, 176 | 108, 176 | 176, 176

    var targetCoordinates = target.getBoundingClientRect();

    var targetX = targetCoordinates.left + window.scrollX;
    var targetY = targetCoordinates.top + window.scrollY;


    console.log("clicked tile coordinates: " + targetX + ", " + targetY);


    // first row checks
    if (targetX === 40 && targetY === 40) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(108,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(40,108).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(108,40).getAttribute('class') === "sliding-puzzle"){
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        } else if (document.elementFromPoint(40,108).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        }
        return true;
      }
    }

    if (targetX === 108 && targetY === 40) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(40,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,40).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(40,40).getAttribute('class') === "sliding-puzzle"){
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        } else if (document.elementFromPoint(108,108).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        } else if (document.elementFromPoint(176,40).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        }
        return true;
      }
    }

    if (targetX === 176 && targetY === 40) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(108,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,108).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(108,40).getAttribute('class') === "sliding-puzzle"){
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        } else if (document.elementFromPoint(176,108).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        }
        return true;
      }
    }

    // second row checks
    if (targetX === 40 && targetY === 108) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(40,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(40,176).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(40,40).getAttribute('class') === "sliding-puzzle"){
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(108,108).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        } else if (document.elementFromPoint(40,176).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        }
        return true;
      }
    }

    // center tile
    if (targetX === 108 && targetY === 108) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(108,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,176).getAttribute('class') === 'tile' &&
         document.elementFromPoint(40,108).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(108,40).getAttribute('class') === "sliding-puzzle"){
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(176,108).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        } else if (document.elementFromPoint(108,176).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        } else if (document.elementFromPoint(40,108).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        }
        return true;
      }
    }

    if (targetX === 176 && targetY === 108) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(176,40).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,176).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(176,40).getAttribute('class') === "sliding-puzzle"){
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(176,176).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) + tileSide + "px"
        } else if (document.elementFromPoint(108,108).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        }
        return true;
      }
    }

    // third row
    if (targetX === 40 && targetY === 176) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(40,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,176).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(40,108).getAttribute('class') === "sliding-puzzle"){
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(108,176).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        }
        return true;
      }
    }

    if (targetX === 108 && targetY === 176) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(40,176).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(176,176).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(40,176).getAttribute('class') === "sliding-puzzle"){
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        } else if (document.elementFromPoint(108,108).getAttribute('class') === "sliding-puzzle") {
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(176,176).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) + tileSide + "px"
        }
        return true;
      }
    }

    if (targetX === 176 && targetY === 176) {
      // if adjacent coordinates have class tiles, cant move tile
      if(document.elementFromPoint(176,108).getAttribute('class') === 'tile' &&
         document.elementFromPoint(108,176).getAttribute('class') === 'tile'){
        console.log("can't move tile!");
        return false;
      } else {
        // else find which side has an empty space and move by tilelength amount
        if(document.elementFromPoint(176,108).getAttribute('class') === "sliding-puzzle"){
          target.style.top = parseInt(target.style.top, 10) - tileSide + "px"
        } else if (document.elementFromPoint(108,176).getAttribute('class') === "sliding-puzzle") {
          target.style.left = parseInt(target.style.left, 10) - tileSide + "px"
        }
        return true;
      }
    }
  }

  function moveTile(e){
    //check if adjacent is empty
    console.log('a tile was clicked! move tile! but first check adjacent space!');
    console.log(e.target);
    var clickedTile = e.target;
    if (checkAdjacent(clickedTile)){
      console.log('can move tile!');
    }
  }

  var tiles = document.getElementsByClassName('tile');
  function init(){
    console.log('init starting');

    // tiles start all on position 1 and need to be moved to the proper places
    positionTiles(tiles);

    // add click event listener to each tile
    for (var i=0; i < tiles.length; i++){
      tiles[i].addEventListener('click', moveTile);
    }

  }
  init();

});
