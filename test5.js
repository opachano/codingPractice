function tickets(peopleInLine){
  let change25 = 0;
  let change50 = 0;
  let answer = "YES"
for (let i = 0; i < peopleInLine.length; i++) {
  if(peopleInLine[i] === 25) {
    change25++
  }
  if(peopleInLine[i] === 50) {
    change50++
    change25--
  }
  if(peopleInLine[i] === 100){
    if (change50 > 0 && change25 > 0) {
      change50--
      change25--
      } else change25-=3;
  }
  if(change25 < 0 || change50 < 0) {
    answer = "NO"
  }
}
  return answer
}




console.log(tickets([25, 25, 100]));