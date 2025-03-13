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
    arr = [5, 3, 8, 1];
    let filteredArr = arr.filter(item => item >= a && item <= b);
    console.log(filteredArr)
}

//arrAB(1, 4, arr);


// Filter Range in Place

// this function should remove
// all values where n < a and n < b

//need i-- as removing anelement shortens the array,
// throwing off the index

function filterRangeInPlace(a, b){
    arr = [ 5, 3, 8, 1 ];
    for(let i = 0; i < arr.length; i++){
        console.log(i);
        if(arr[i] > b || arr[i] < a){
            arr.splice(i, 1);
            i--
        }   
    }
    console.log(arr);

}
//should return
// [3. 1]


// Sort decreasing order
// .sort() will by default sort elements as strings
// I believe this means it would rank 15 as being lower than 2
// as the first character of the string is 1, and the first of the 
// second element is 2. i.e 1 < 2 

// To avoid this we can write a custom comparison function
// .sort() basically walks an array and repositions 
// elements based on whether a positive or negative number is returned.
// if a is 5 and b is 3 and I return a - b, then the elements will be 
// switched if a > b as a positive integer is returned.


// By returning b - a, I can cause the array to be sorted in descending 
// order, as b and a will be swapped if a < b this time.

function sortDecreasing(){
    arr = [5, 2, 1, -10, 8];
    arr.sort(function(a, b){
        return b - a
    })
    console.log(arr);
}

// sortDecreasing();


//  COPY AND SORT ARRAY

// we have an array of strings arr. Created a sorted copy
// without modifying the original array
 

// prolly just gonna use splice and sort iyyy?

function copySort(arr){
    arr = [1, 2, 43, 7, 5, 10];
    //copy array 
    let arrCopy = arr.splice(1);
    //sort array
    arrCopy.sort(function(a, b){
        return a - b;
    })
}

copySort();



