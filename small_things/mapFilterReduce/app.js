const nums = [1, 2, 3, 4, 5,];

// map demo

function addOne(num){
    return num + 1;
}

const mappedArr = nums.map(addOne);
//alert(mappedArr);

const filteredArr = nums.filter((num) => num%2==0);
//alert(filteredArr);

//alerts: 2, 4


const initialValue = 0;
const sumOfNums = nums.reduce((accumulator, currentValue) =>
     accumulator + currentValue, initialValue)

alert(sumOfNums);
//alerts 15 i.e 1 + 2 + 3 + 4 + 5 = 15




