//My Code

function rowSumOddNumbers(n) {
  let counter = 1;
  let arr = [];
	for (let i = 1; i <= n; i++) {
    let tempArr = [];
    for(let j = 1; j <= i; j++) {
    tempArr.push(counter);
    counter+=2;
    }
    arr.push(tempArr)
  }
  return arr[n-1].reduce( (x , y ) => {return x + y })
}

//Best Practice

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}