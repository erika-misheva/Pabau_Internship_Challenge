function directionChange(currentChar) {
  return currentChar === "" || currentChar === "+";
}

function findPath(x, y, grid) {
  let path = "";
  let currentChar = grid[x][y];

  while (currentChar !== "s") {
    if (currentChar === ">") {
      path += "@";
      currentChar = "-";
    } else if (currentChar === "-") {
      while (!directionChange(currentChar) && y < grid[x].length - 1 && currentChar !== "s" ) {
        //MOVE RIGHT
        if (grid[x][++y] !== "") {
          path += grid[x][y];
          currentChar = grid[x][y];   
        } else {
          y--;
          break;
        }
      }
      while (!directionChange(currentChar) && y > 0 && currentChar !== "s") {
        //MOVE LEFT
        if (grid[x][--y] !== "") {
          path += grid[x][y];
          currentChar = grid[x][y];
        } else {
          y++;
          break;
        }
      }
      if(currentChar !== "s"){
        currentChar = "|";
      }
      
    } else if (currentChar === "|") {
      while (!directionChange(currentChar) && x < grid.length - 1 && currentChar !== "s") {
        //MOVE DOWN
        if (grid[++x][y] !== "") {
          path += grid[x][y];
          currentChar = grid[x][y];
        } else {
          x--;
          break;
        }
      }

      while (!directionChange(currentChar) && x > 0 && currentChar !== "s") {
        //MOVE UP
        if (grid[--x][y] !== "") {
          path += grid[x][y];
          currentChar = grid[x][y];
        } else {
          x++;
          break;
        }
      }
      if(currentChar !== "s"){
      currentChar = "-";
      }
    }
  }

  return path;
}

function findLetters(grid) {
  let letters = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let currentChar = grid[i][j];
      if ( /^[A-Za-z]$/.test(currentChar) && currentChar === currentChar.toUpperCase()) {
        letters += currentChar;
      }
    }
  }
  return letters;
}

let inputGrid = [
    [">", "-", "-", "-", "A", "-", "@", "-", "+"],
    ["", "", "", "", "", "", "", "", "|"],
    ["+", "-", "U", "-", "+", "", "", "", "C"],
    ["|", "", "", "", "|", "", "", "", "|"],
    ["s", "", "", "", "C", "-", "-", "-", "+"],
];

let exampleGrid = [
    [">", "-", "-", "-", "A", "-", "-", "-", "+"],
    ["", "", "", "", "", "", "", "", "|"],
    ["s", "-", "B", "-", "+", "", "", "", "C"],
    ["", "", "", "", "|", "", "", "", "|"],
    ["", "", "", "", "+", "-", "-", "-", "+"],
];

console.log(findPath(0, 0, inputGrid));
console.log(findLetters(inputGrid));
console.log(findPath(0, 0, exampleGrid));
console.log(findLetters(exampleGrid));
