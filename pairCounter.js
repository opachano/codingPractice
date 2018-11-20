function sockMerchant(n, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
      for (let j = i + 1; j < ar.length; j++) {
          if (ar[i] === ar[j] && ar[i] !== undefined) {
              ar.splice(j, 1);
              ar.splice(i, 1);
              i = 0;
              j = i + 1
              pairs++
          }
          if (ar[i] === ar[j] && ar.length === 2) {
              pairs++
          }
      }
  }
  return pairs;
}

//Better way of doing it!
function sockMerchant(n, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) { 
      for (let j = i+1; j < ar.length; j++) {
          if (ar[i] === ar[j] && ar[i] !== undefined) {
              ar.splice(j, 1);
              ar.splice(i, 1);
              i = 0;
              j = 0;
              pairs++
          }
      }
  }
  return pairs;
}
