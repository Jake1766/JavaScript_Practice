const palindromes = function (string) {
    //need to remove spaces first 
    //then reverse string A to get string B 
    //compare string A and B 
    // if == then string is palindrome

    console.log(`\n------------ checking: ${string}  ------------\n`);
    string = string.replace(/[^\w\s]/g, '');
    //make lowercase
    string = string.toLowerCase();


    //convert to array
    let arrA = string.split('');
    console.log(`split string into: ${arrA}`);

    //remove spaces
    for (i in arrA){
        if(arrA[i] == ' '){
            arrA.splice(i, 1);
        }
    }
    console.log(`check spaces removed: ${arrA}`);


    //reverse string to get string B 
    arrB = arrA.slice().reverse();
    arrA.reverse();

    //.reverse() changes the actual array rather than 
    //creating a new copy, so we need to flip it back
    arrA.reverse();


    console.log(`check array reversed: ${arrB}`);

    //compare A and B 
    //need to reverse arrA again I think
    console.log(`arrA: ${arrA} \narrB: ${arrB}`);
    
    //looping arrays to check
    for(i = 0; i <= arrA.length; i ++){
        console.log(`\ncomparing ${arrA[i]} to ${arrB[i]}\n`);
        if(arrA[i] != arrB[i]){
            console.log(`returning false as ${arrA[i]} != ${arrB[i]}\n`);
            return false;
        }
    }

    console.log('returning true');
    return true;
};

palindromes('ZZZZ car, a man, a maracaz.');


// Do not edit below this line
module.exports = palindromes;
