//My Code
function streetFighterSelection(fighters, position, moves){
  let answer = [];
  for(let i = 0; i < moves.length; i++) {
    if(moves[i] === "up") {
     if(position[0] !== 0) {
        position[0]--
        answer.push(fighters[position[0]][position[1]])
     } else {
     answer.push(fighters[position[0]][position[1]])
     }
     }
     if(moves[i] === "down") {
     if(position[0] !== 1) {
        position[0]++
        answer.push(fighters[position[0]][position[1]])
     } else {
     answer.push(fighters[position[0]][position[1]])
     }
     }
    if(moves[i] === "right") {
     if(position[1] !== 5) {
        position[1]++
        answer.push(fighters[position[0]][position[1]])
     } else {
     position[1] = 0;
     answer.push(fighters[position[0]][position[1]])
     }
    }
    if(moves[i] === "left") {
     if(position[1] !== 0) {
        position[1]--;
        answer.push(fighters[position[0]][position[1]]);
     } else {
     position[1] = 5;
     answer.push(fighters[position[0]][position[1]])
     }
    }
  }
  return answer;
}

//Best Practice

function streetFighterSelection(fighters, position, moves){
  var result = [];
  
  moves.forEach(function(move) {
    if (move === "up") {
      position[0] = 0;
    }
    else if (move === "down") {
      position[0] = 1;
    }
    else if (move === "right") {
      position[1] = (position[1] === 5) ? 0 : position[1] + 1;
    }
    else if (move === "left") {
      position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    }
    
    result.push(fighters[position[0]][position[1]]);
  });
  
  return result;
}