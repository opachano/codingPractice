//My code
function removeChar(str){
  let answer = str.split("");
    answer.pop(); answer.shift();
    return answer.join("")
};

//Best Practice

function removeChar(str) {
  return str.slice(1, -1);
}