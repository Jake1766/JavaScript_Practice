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

camelize(str)
camelize("") //empty string check
camelize('link-style-images') //multiple hyphen check
camelize('-webkit-transition') //another check