//My code
function repeatStr (n, s) {
  let answer = "";
    for(let i = 1; i <= n; i++) {
      answer += s
    }
    return answer;
  }

//Best code
function repeatStr (n, s) {
  return s.repeat(n);
}
