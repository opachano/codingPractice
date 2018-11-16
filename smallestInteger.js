//My Code
class SmallestIntegerFinder {
  findSmallestInt(args) {
   return args.reduce((x,y)=>{
      if(x > y){return y}
      if(x < y){return x}
      return x
    })
  }
}

//Best Practice
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}