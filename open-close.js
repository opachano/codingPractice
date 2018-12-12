//My Code
function isBalanced(s, caps) {
  let opened = []
  let counter = 0
  for(let i = 0; i < s.length; i++) {
      if(caps.includes(s[i])) {
        counter++
        opened.push(s[i])
        if(opened.length > 1) {
        if((opened[opened.length - 2].charCodeAt() === opened[opened.length - 1].charCodeAt()) 
        || 
        (opened[opened.length - 2].charCodeAt() === (opened[opened.length - 1].charCodeAt() - 1)) 
        || 
        (opened[opened.length - 2].charCodeAt() === (opened[opened.length - 1].charCodeAt() - 2))){    
            opened.pop()
            opened.pop()
            counter -=2
          }
        }
      } 
    }
  return counter === 0 
  }

//Best Practice

function isBalanced(s, caps) {
  
  var i, stack = [];

  for (var c of s) {
    i = caps.indexOf(c);

    if (i === -1)
      continue;

    else if (stack.length && stack[0] === caps.lastIndexOf(c) - 1)
      stack.shift();
      
    else
      stack.unshift(i);
  }
  
  return !stack.length;
}