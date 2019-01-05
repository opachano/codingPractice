// Intermediate Algorithm Scripting: Sum All Numbers in a Range
//Number 1
function sumAll(arr) {
  let answer = 0
  if(arr[0] > arr[1]) {
    let swapper = arr[0]
    arr[0] = arr[1]
    arr[1] = swapper
  }
  for(let i = arr[0]; i <= arr[1]; i++) {
    answer += i
  }

  return answer
}

//Number 2
function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }
  for(let i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
    }
  }
  // Same, same; but different.
  return newArr;
}

//Number 3

function destroyer(arr) {
  let args = [...arguments]
  args.shift()
  return arr.filter((x)=>{
    return args.indexOf(x) === -1
  });
}

//Number 4