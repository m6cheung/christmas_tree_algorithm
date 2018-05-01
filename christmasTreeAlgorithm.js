const createChristmasTree = (height) => {
  let result = [];
  for(let i = 0; i < height; i++) {
    result.push([]);
  }

  let i = height
  result[0][i] = "#";

  let j = i;
  let k = i;
  for(let p = 1; p < height; p++) {

    if(p === height - 1) {
      result[p][i] = "#"
    } else if(p === height -2) {
      j--;
      while(j <= k+1) {
        result[p][j] = "#";
        j++;
      }
    } else if(j > -1) {
      k++;
      j--;
      result[p][j] = "#";
      result[p][k] = "#";
    }
  }

  for(let j = 0; j < result.length; j++) {
    for(let k = 0; k < result[j].length; k++) {
      if(result[j][k] === undefined) {
        result[j][k] = ' ';
      }
    }
  }

  return result.join("\n");
}