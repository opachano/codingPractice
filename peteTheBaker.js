//My answer

function cakes(recipe, available) {
  let counter = {}
  for(let ingredient in recipe) {
    if(available[ingredient] < recipe[ingredient] || !available[ingredient]) {
      return 0
    }
    else if(recipe[ingredient]){
     counter[ingredient] = Math.floor(available[ingredient]/recipe[ingredient])
    }  
  }
  let times = Object.values(counter)
  return times.reduce((x, y) => {
    if (x > y) {return y}
     else {return x}
  })
}

//Best Practice

function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}