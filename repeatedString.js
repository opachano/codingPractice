function repeatedString(s, n) {
  let aTimes = 0;
  let restA = 0;
  for (let i = 0; i < s.length; i++) { 
      if (s[i] === "a") {
          aTimes++;
          if (i < (n % s.length)) {
              restA++
          }
      }
  }
  return (aTimes * (Math.floor(n/s.length))) + restA
}