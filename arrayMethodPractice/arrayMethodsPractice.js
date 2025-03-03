//write a function to camelize the following string

str = "background-color"

function camelize(str){
    //check length > 0
    console.log(str.length)
    if (str.length > 0){
        console.log('working...')
        //split string
        arr = str.split('');

        //use filer method to remove -
        let filteredArr = arr.filter(item => item != '-')
        console.log('filtered arr: ', filteredArr);


        const capitalIndex = arr.indexOf('-');
        arr.splice(capitalIndex, 1)
        arr[capitalIndex] = arr[capitalIndex].toUpperCase();

        str = arr.join('');
        console.log(str)
        return str
    }
}

camelize(str)
camelize("") //empty string check
camelize('link-style-images') //multiple hyphen check
camelize('-webkit-transition') //another check