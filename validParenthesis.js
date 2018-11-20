//My Function
function validParentheses(parens){
  let correct = 0;
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === "(") {
      correct++
    } else if(parens[i] === ")" && correct > 0) {
      correct--
    } else return false
  }
  return correct === 0? true : false
}

//Best Practice

// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
      count = 0,           // pretty useless if they're not grouping *something*
      token;
  while(token = tokenizer.exec(string), token !== null){
     if(token == "(") {
        count++;
     } else if(token == ")") {
        count--;
        if(count < 0) {
           return false;
        }
     }
  }
  return count == 0;
}