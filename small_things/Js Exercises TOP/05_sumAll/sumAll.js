const sumAll = function(min, max) {
    //check all args are ints and + numbers
    for(arg = 0; arg < arguments.length; arg++){
        if (Number.isInteger(arguments[arg]) == false){
            return "ERROR";
        }
        if(arguments[arg] < 0){
            return "ERROR";
        }
    }

    // ensure max is largest number

    if(min > max){
        let temp = max;
        max = min;
        min = temp;
    }

    total = 0;
    for(num = min; num < max+1; num++){
        console.log(`adding ${num} to ${total}`);
        total += num;
        console.log(`total: ${total}`);
    }
    return total;
};


// Do not edit below this line
module.exports = sumAll;
