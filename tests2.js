let arr = [1,2,[6,7,8],4,5]
let otherArr = [];

otherArr.push(...arr);

console.log(otherArr)

otherArr[2] = 10;

console.log(arr, otherArr)

   let counter = 100
      for (let counter = 1; counter < 50; counter++){
        
      }

      console.log(counter)

function whatever() {
  return arguments;
}

console.log(whatever("x", "y", "z"))

let a;
let c;

console.log({b:2} === {b:2})