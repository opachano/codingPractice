//My Code
function findOdd(A) {
  let checker = [];
  for(let i = 0; i < A.length; i++) {
    if(checker.indexOf(A[i]) !== -1) {
      checker.splice(checker.indexOf(A[i]), 1)
      A.splice(i, 1)
      i=-1
    }  else {
      let tempInt = A[i]
      checker.push(tempInt)
      A.splice(i, 1)
      i=-1
    }
  }
  return checker[0];
}

//Best Practice

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);