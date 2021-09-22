class grid {
  constructor(id) {
    this.id = id;
    this.id.appendChild(document.createElement("div"));
    this.tiles = id.getElementsByTagName("div");
    this.tileNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let count = 1;
    for (let tile of this.tiles) {
      let tileId = "T" + count.toString();
      tile.id = tileId;
      tile.onclick = function () { update(tileId) };
      count++;
    }
  }

  /** Function to update and refresh the board when a tile is clicked
   * 
   * @param {string} id - the id of the tile clicked on
   */
  updateBoard = function(id) {
    if (this.isBlankNeighbor(id)) { // Check if tile clicked on is next to the blank space and swap
      this.swapTile(id);
    }
    let count = 0;
    for (let tile of this.tiles) { // Now go through and set all ids to match the array
      tile.id = "T" + this.tileNums[count].toString();
      tile.innerHTML = this.tileNums[count].toString();
      if (tile.id == "T16") { tile.innerHTML = "";}
      tile.onclick = function () { update(tile.id); };
      if (this.isBlankNeighbor(tile.id)) { // If a tile is now neighboring the blank tile, make it hoverable
        tile.classList.add("hoverable");
      } else {
        tile.classList.remove("hoverable");
      }
      count++;
    }
  }
  
  /** Function to swap a tile with the blank tile "T16". 
   * 
   *  It will search the array of tileNums, find where both tiles are, and swap their positions
   * 
   * @param {string} id 
   */
  swapTile = function (id) {
    let tilei = this.findTile(id);
    let blanki = this.findTile("T16");
    let temp = this.tileNums[tilei];
    this.tileNums[tilei] = this.tileNums[blanki];
    this.tileNums[blanki] = temp;
  }


  /** Check if a tile is adjacent to the blank tile, T16
   * 
   * @param {string} id 
   * @returns true if the tile is neighboring, false otherwise
   */
  isBlankNeighbor = function (id) {
    let tilei = this.findTile(id);
    if (this.tileNums[tilei + 1] == 16 || this.tileNums[tilei - 1] == 16 ||
      this.tileNums[tilei + 4] == 16 || this.tileNums[tilei - 4] == 16) {
      return true;
    }
    return false;
  }

  /** Searches the list of tileNums to find the position of the tile inputted
   * 
   * @param {string} id 
   * @returns 
   */
  findTile(id) {
    for (let i = 0; i < this.tileNums.length; i++) {
      if (id.slice(1) == this.tileNums[i]) {
        return i;
      }
    }
    return -1;
  }
}


/** This function was added as a workaround for adding a method to the onclick of each div.
 *  Trying to use a class method in the onclick was incredibly complex and confusing, so I 
 *  got advice from Josiah Kangas to use this outside method to call my class methods.
 * 
 * @param {string} id 
 */
function update(id) {
  board.updateBoard(id);
}

let board;
window.onload = () => {
  board = new grid(document.getElementById("puzzlearea"));
  board.updateBoard("0");
};