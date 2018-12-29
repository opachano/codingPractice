//Given an array  of a integers and a number, d, 
//perform  left rotations on the array. Return the 
//updated array to be printed as a single line of 
//space-separated integers.

function rotLeft(a, d) {
  let currentRot
  for (let i = 0; i < d; i++) { 
      currentRot = a.shift()
      a.push(currentRot)
  }
  return a

}
