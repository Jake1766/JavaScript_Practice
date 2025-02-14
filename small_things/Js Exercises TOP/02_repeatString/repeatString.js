const repeatString = function(string, num) {

    if(num < 0){
        return "ERROR";
    }

if(num == 0){
    return "";
}

    var repeatedString = string; 
    for (i = 0; i < num-1; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
