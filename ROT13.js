//My code

function rot13(str) {
  let arr = str.split("")
  for(let i = 0; i < arr.length; i++) {
    if((arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90)){
      if((arr[i].charCodeAt(0)+13) > 90) {
        let tempNum = ((arr[i].charCodeAt(0)+12) - 90) + 65
        arr[i] = String.fromCharCode(tempNum)
      } else {
        arr[i] = String.fromCharCode((arr[i].charCodeAt(0)+13))
      }
    }
    if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
       if((arr[i].charCodeAt(0)+13) > 122) {
        let tempNum = ((arr[i].charCodeAt(0)+12) - 122) + 97
        arr[i] = String.fromCharCode(tempNum)
      } else {
        arr[i] = String.fromCharCode((arr[i].charCodeAt(0)+13))
      }
    }
  }

  return arr.join("")
}

//Best Practice

function rot13(str) {
  return str.replace(/[a-z]/ig, function(x){
    return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
  });
}