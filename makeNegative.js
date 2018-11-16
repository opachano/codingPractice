//My code
function makeNegative(num) {
  if(num < 0){return num};
 return (-num)
}

//Best practice
function makeNegative(num) {
  return -Math.abs(num);
}