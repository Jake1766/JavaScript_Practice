//write a function to camelize the following string

str = "background-color"

function camelize(str){
    //split string
    arr = str.split('');
    //capitalize first letter second word
        //identify hyphen
        //remove hyphen
    const capitalIndex = arr.indexOf('-');
    arr.splice(capitalIndex, 1)
    arr[capitalIndex] = arr[capitalIndex].toUpperCase();

    str = arr.join('');
    return str
}

camelize(str)