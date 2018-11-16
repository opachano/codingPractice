//My code

function noSpace(x){
  return x.split(" ").join("")
}

//Best Practice

function noSpace(x){
  return x.replace(/\s/g, '');
}