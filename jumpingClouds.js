function jumpingOnClouds(c) {
  let counter = 0;
  for (let i = 0; i < c.length; i++) {
      if (i < c.length - 1) {
          if (c[i + 2] === 0) {
              counter++
              i++
          } else counter++;
      }
  }
  return counter
}