const genBtn = document.getElementById("genBtn");


//value field
const fieldA = document.getElementById('valueA');
const fieldB = document.getElementById('valueB');
const fieldC = document.getElementById('valueC');

//copy functionality
const copyA = document.getElementById('copyA');
const copyB = document.getElementById('copyB');
const copyC = document.getElementById('copyC');

genBtn.addEventListener("click", insertFloat);

function floatGen(min, max){
    return Math.random() * (max-min) + min;
}

function insertFloat(){
    fieldA.value = floatGen(3.5, 7.5).toFixed(1);
    fieldB.value = floatGen(3.5, 4.2).toFixed(1);
    fieldC.value = floatGen(6.8, 7.5).toFixed(1);
}

function copy(element){
    const textToCopy = Element.textContent
    navigator.clipboard.writeText(textToCopy);
}