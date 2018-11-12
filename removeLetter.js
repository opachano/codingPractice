let a = "thlislonglword";

let b = a.split("");

function checkIfCorrect(key) {
      for (let i = key; (b.indexOf(key) !== -1);) {
       b.splice(b.indexOf(key), 1)
      }
    } 

console.log(checkIfCorrect("l"), b)