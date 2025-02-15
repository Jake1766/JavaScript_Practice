const removeFromArray = function(arr, valueToRemove) {
    console.log("working!");
    console.log(`values to remove length: ${arguments.length-1}`);
    for( let item = 0; item < arguments.length - 1; item ++){
        console.log(`item: ${item}`);
        console.log(`array: ${arr}`);

        // block to count instances of value
        let valueInstances = arr.filter(arr => arr === arguments[item+1]).length;
        console.log(`${valueInstances} instance(s) of value: ${arguments[item+1]}`)


        // block to remove value
        for (count = 0; count < valueInstances; count++){
            let removeValue = arguments[item + 1];
            console.log(`value to remove this loop: ${removeValue}`);
            arr.splice((arr.indexOf(removeValue)), 1);
        }
    }

    console.log(arr);
    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
