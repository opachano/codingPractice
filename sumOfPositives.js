//My code
function positiveSum(arr) {
  return arr.reduce((x,y)=>{
    if(x <= 0 && y <= 0) {
      return 0
    } 
    if(x >= 0 && y <= 0)  {
      return x
    }
    if(x <= 0 && y >= 0)  {
      return y
    }
    return x + y
  }, 0);
}

//Best Practice

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}