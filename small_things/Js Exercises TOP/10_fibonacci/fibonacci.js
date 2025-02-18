const fibonacci = function(n) {
    // 1, 1, 2, 3, 4, 5, etc

    if(n < 0){
        return "OOPS";
    }

    var n1 = 0;
    var n2 = 1;
    if(n == 0){
        return n1;
    }

    if(n == 1){
        return n2;
    }

    for (i = 2; i <= n; i++){
        //console.log(`${n1} + ${n2}`)
        var n3 = n1 + n2;
        //console.log(n3);
        n1 = n2;
        n2 = n3;
        
    }
    return n3;


};

fibonacci(5);

// Do not edit below this line
module.exports = fibonacci;
