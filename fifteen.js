class grid {
  constructor(id) {
    this.id = id;
    this.id.appendChild(document.createElement("div"));
    this.tiles = id.getElementsByTagName("div");
    this.tileNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let count = 0;
    for (let tile of this.tiles) {
      let tileId = "tile" + count.toString();
      tile.id = tileId;
      tile.classList.add("active");
      tile.addEventListener('click', () => this.makeMove(tileId));
      count++;
    }
  }
  makeMove = function(id) {
    let tempTile = document.getElementById(id);
    let emptyTile = document.getElementById("tile15");
    document.getElementById("tile15").innerHTML = tempTile.innerHTML;
    document.getElementById("tile15").id = tempTile.id;
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).id = "tile15";
    
  }
}


window.onload = () => {
  new grid(document.getElementById("puzzlearea"));
}