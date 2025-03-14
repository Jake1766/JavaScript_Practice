//three functions to demonstrate .map, .filter and .reduce
//each function should the sum of all even numbers tripled

const nums = [1, 2, 3, 4, 5, 6]

console.log('working');

//function using a for loop

function forLoopTriple(arr){
    let total = 0;
    for(var i = 0; i < arr.length; i++){
        //check if even
        if(arr[i]%2 == 0){
            total += arr[i]*3;
        }
    }
    console.log("for loop result: ", total);
    return total;
}
forLoopTriple(nums);

//same function using .map

function fancyTriple(arr){
   var evens = arr.filter(num => num%2 == 0);
   console.log('evens:', evens);

   
   var triple = evens.reduce((total, currentItem) => {
   console.log('current: ', currentItem);
   console.log('total: ', total);
   console.log('this loop value: ', total + (currentItem * 3));
   return total + (currentItem * 3);
   });
   console.log('triple evens: ', triple);
}


//fancyTriple(nums);


function reducePractice(nums){
    nums.reduce(total, current => num + 1)
}


// now works

function tripledEvens(nums){
    const evenNums = nums.filter(num => num%2 == 0)
    console.log('even nums: ', evenNums);
    const tripled = evenNums.map(num => num*3);
    console.log('tripled: ', tripled); 
    return tripled.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

console.log(tripledEvens(nums));