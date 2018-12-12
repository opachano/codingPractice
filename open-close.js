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

