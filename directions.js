// MY Code

function dirReduc(arr){
  let stack = [];
  for(let d of arr) {
    switch (d) {
      case "NORTH": 
      if(stack[0] === "SOUTH") {
      stack.shift(); 
      } else stack.unshift(d);
      break;
      
      case "SOUTH": 
      if(stack[0] === "NORTH") {
      stack.shift(); 
      } else stack.unshift(d);
      break;
      
      case "EAST":
      if(stack[0] === "WEST") {
      stack.shift();
      } else stack.unshift(d);
      break;
      
      case "WEST": if(stack[0] === "EAST") {
      stack.shift();
      } else stack.unshift(d);
      break;
      }
  }
    return stack.reverse()
}

// Best Practice

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}