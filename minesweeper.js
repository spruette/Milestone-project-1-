var board = [];
var rows = 8;
var columns = 8;

var minesCount = 5;
var minesLocation = []; // "2-2", "3-4", "2-1"

var tilesClicked = 0; // goal is to click all tiles except the ones containing mines
var flagEnabled = false;

var gameOver = false; 

window.onload = function () {
    startGame ();
}

function startGame () {
    document.getElementById("mines-count").innerText = minesCount;
}