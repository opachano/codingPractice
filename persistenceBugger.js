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

function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}