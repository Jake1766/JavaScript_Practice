//write a function to camelize the following string

str = "background-color"

function camelize(str){
    //check length > 0

    if (str.length > 0){
        //split string
        arr = str.split('');

        //capitalize letter
        //check letter will not be first once filtered
        
        //loops each item, if item == - and not position 0
        //then capitalise the next item
        arr.forEach(function(item, index, array){
          if(item == '-'){
              array[index+1] = array[index+1].toUpperCase()
          }

        });
        console.log('uppercase check: ', arr);
        

        //use filer method to remove hyphens
        let filteredArr = arr.filter(item => item != '-');
 

        str = filteredArr.join('');
        console.log(str)
        return str
    }
    else{return str}
}


//checks for above function
// camelize(str)
// camelize("") //empty string check
// camelize('link-style-images') //multiple hyphen check
// camelize('-webkit-transition') //another check


// for the following exercises I'll store the arrays
//within the function, otherwise I'll have a bunch 
// of globally scoped arrays


//Filter Range

//Write a function that gets an array arr, and returns an array elements
//with values >= a, or values <= b 

function arrAB(a, b){
    arr = [5, 3, 8, 1]
    let filteredArr = arr.filter(item => item >= a || item <= b);
    console.log(filteredArr)
}

//arrAB(1, 4, arr);


// Filter Range in Place

// this function should remove
// all values where n < a and n < b

function filterRangeInPlace(a, b){
    arr = [5, 2, 1, -10, 8];
    const filteredArr = arr.filter((item) => item > a || item < b);
    console.log(filteredArr);

}

filterRangeInPlace(1, 4);
