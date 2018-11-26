//My Code

function persistence(num) {
  let counter = 0;
  let newNum = num.toString().split("")
  let tempNum = 0;
  while(newNum.length > 1) {
  tempNum = newNum.reduce((x, y)=>{
    return x*y
   })
    newNum = tempNum.toString().split("");
    counter++
  }
  return counter
}

//Best Practice