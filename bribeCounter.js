//Count bribes in Array of unordered numbers
//Max 2 bribes per number

function minimumBribes(q) {
  let bribeCounter = 0;
  for (let i = 0; i < q.length; i++) {
      let didSwap = false
          if ((i + 3) < q[i]) {
              return console.log("Too chaotic")
          }
          if (q[i] > q[i + 1]) {
              bribeCounter++
              let swapper = q[i]
              q[i] = q[i + 1]
              q[i + 1] = swapper
              didSwap = i
          }
          if (didSwap) { 
              i = didSwap - 2
              didSwap = false
          }
      }
  return console.log(bribeCounter)
}