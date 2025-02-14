const reverseString = function(string) {
    stringArray = string.split("");
    //console.log(stringArray);
    reverseArray = stringArray.reverse();
    //console.log(reverseArray);
    outString = reverseArray.join("");
    return outString;



};
reverseString("beef");

// Do not edit below this line
module.exports = reverseString;
