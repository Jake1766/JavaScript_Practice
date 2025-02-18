const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1-n2;
};


//outputs sum of an array;
const sum = function(arr) {
  var total = 0
  if (arr.length == 0){
    return total;
  } 
	
  for (i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;


};

const multiply = function(arr) {
  var total = arr[0];
  for (i = 1; i < arr.length; i ++){
    total *= arr[i]
  }
  return total;
};

const power = function(n1, exp) {
	return n1**exp
};
// the factorial is the product of 
//multiplying all numbers up to n by n
const factorial = function(n1) {
  var total = 0;
  if(n1 == 0){
    return 1;
  }
  total = 1;
	for(i = 1; i <= n1; i++){
    total *=i;
    console.log(`total is: ${total}`);
  }
  console.log(`final total is: ${total}`);
  return total;
};

factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
