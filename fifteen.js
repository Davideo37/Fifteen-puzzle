class grid {
  constructor(id) {
    this.id = id;
    this.id.appendChild(document.createElement("div"));
    this.tiles = id.getElementsByTagName("div");
    for (let i = 0; i < this.tiles.length; i++) {
      this.tiles[i].id = "tile" + i.toString();
      this.tiles[i].classList.add("active");
      this.tiles[i].addEventListener('click', function () { makeMove("tile" + i.toString()) });
    }
  }

  
}
function makeMove(id) {
  let tempTileIH = document.getElementById(id).innerHTML;
  document.getElementById("tile15").innerHTML = tempTileIH;
  document.getElementById("tile15").id = id;
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).id = "tile15";
  
  
}

window.onload = () => {
  new grid(document.getElementById("puzzlearea"));
}