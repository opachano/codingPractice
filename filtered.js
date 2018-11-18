// My code 

function odds(values){
  return values.filter(x=> ((x % 2) === 1));
}

//My Best practice

function odds(values){
  return values.filter( v => v%2 );
}