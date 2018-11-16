//My code

function countSheeps(arrayOfSheep) {
  let counter = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {counter++}
    }
    return counter
  }

//Best Practice

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}