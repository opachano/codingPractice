// Intermediate Algorithm Scripting: Sum All Numbers in a Range

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
