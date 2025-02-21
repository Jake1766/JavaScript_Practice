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