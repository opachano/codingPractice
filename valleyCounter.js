function countingValleys(n, s) {
  let valleysCounter = 0;
  let inValley = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "D" && inValley === 0) {
          valleysCounter++
          inValley--
      } else if (s[i] === "U") {
          inValley++
      } else if (s[i] === "D") {
          inValley--
      }
  }
      return valleysCounter
}
