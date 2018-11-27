//My Code

function findMissingLetter(array) {
  let answer;
  array.reduce((x, y)=>{
    if((x.charCodeAt() + 2) == y.charCodeAt()){
      answer = String.fromCharCode(x.charCodeAt() + 1)
    }
    return y
  })
  return answer;
}

//Best Practice

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}