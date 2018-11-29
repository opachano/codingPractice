// My code

function digPow(n, p){
  let nArr = n.toString().split("");
  let math = 0;
  for(let i = 0; i < nArr.length; i++){
    math += Math.pow(nArr[i], p)
    p++
  }
  let result = (math/n)
  if(Number.isInteger(result)){return result} else {return -1}
}

//Best Practice 

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}